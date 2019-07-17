import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducers = {
  routing: routerReducer,
};
const reducer = combineReducers(rootReducers);
const win = window;
const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.__REDUX_DEVTOOLS_EXTENSION__) ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const initialState = {};
const Store = createStore(reducer, initialState, storeEnhancers);
export default Store;