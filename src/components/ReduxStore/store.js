import { createStore, combineReducers } from 'redux';
import reducers from './reducers';


const store = createStore(
  combineReducers(reducers),
  // @see https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;