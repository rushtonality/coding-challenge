export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchArticleBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchArticleSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { data }
});

export const fetchArticleFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchArticle(id) {
    console.log("fetchArticle: ");
    return dispatch => {
      dispatch(fetchArticleBegin());
      return fetch(`http://localhost:4000/api/article/${id}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchArticleSuccess(json));
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