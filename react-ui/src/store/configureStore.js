import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import articleReducer from '../reducers/ArticleReducer';
import articleListReducer from '../reducers/ArticleListReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      article: articleReducer,
      articles: articleListReducer,
      form: formReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
