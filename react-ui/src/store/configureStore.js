import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { DataTableReducer } from 'react-redux-datatable';
import { reducer as formReducer } from 'redux-form'
import ArticleReducer from '../reducers/ArticleReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      DataTableReducer,
      article: ArticleReducer,
      form: formReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
