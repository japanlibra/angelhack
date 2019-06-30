import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import arwes from './arwes';
import test from './test';

const rootReducer = combineReducers({
  arwes,
  test
});

export default createStore(rootReducer, applyMiddleware(thunk));
