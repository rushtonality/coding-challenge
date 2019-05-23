import {
    FETCH_ARTICLES_BEGIN,
    FETCH_ARTICLES_REPLACE,
    FETCH_ARTICLES_APPEND,
    FETCH_ARTICLES_FAILURE
  } from '../actions/ArticleListActions';
  
  const initialState = {
    data: [],
    error: null
  };
  
  export default function articleReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ARTICLES_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          error: null
        };
  
      case FETCH_ARTICLES_REPLACE:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          data: action.payload.data
        };
  
        case FETCH_ARTICLES_APPEND:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
              ...state,
              data: state.data.concat(action.payload.data)
            };
      
          case FETCH_ARTICLES_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          data: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }