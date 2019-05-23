import { handleErrors, baseUrl } from "../utils/HttpUtils"

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

export function fetchArticles(offset, append, filter) {
    console.log("fetchArticles: ");
    return dispatch => {
      dispatch(fetchArticleBegin());
      var url = new URL(`${baseUrl}/article`),
      params = {offset: offset, filter : filter}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      return fetch(url)      
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          if (append) {
            dispatch(fetchArticleAppend(json));
          }
          else {
            dispatch(fetchArticleReplace(json));
          }          
          console.log("fetchArticle: " + json);
          return json;
        })
        .catch(error => dispatch(fetchArticleFailure(error)));
    };
}
