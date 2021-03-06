import { handleErrors, baseUrl } from "../utils/HttpUtils"

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
    return dispatch => {
      dispatch(fetchArticleBegin());
      return fetch(`${baseUrl}/article/${id}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchArticleSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchArticleFailure(error)));
    };
}
