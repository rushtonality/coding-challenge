export const FETCH_ARTICLES_BEGIN   = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_REPLACE = 'FETCH_ARTICLES_REPLACE';
export const FETCH_ARTICLES_APPEND  = 'FETCH_ARTICLES_APPEND';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticleBegin = () => ({
  type: FETCH_ARTICLES_BEGIN
});

export const fetchArticleReplace = data => ({
  type: FETCH_ARTICLES_REPLACE,
  payload: { data }
});

export const fetchArticleAppend = data => ({
  type: FETCH_ARTICLES_APPEND,
  payload: { data }
});

export const fetchArticleFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error }
});

export function fetchArticles(offset, filter) {
    console.log("fetchArticles: ");
    return dispatch => {
      dispatch(fetchArticleBegin());
      var url = new URL("http://localhost:4000/api/article"),
      params = {offset: offset, filter : filter}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      return fetch(url)      
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchArticleAppend(json));
          console.log("fetchArticle: " + json);
          return json;
        })
        .catch(error => dispatch(fetchArticleFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}