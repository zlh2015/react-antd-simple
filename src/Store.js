import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './Reducers';
import rootSagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers(rootReducers);
const win = window;
const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}
middlewares.push(sagaMiddleware);

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.__REDUX_DEVTOOLS_EXTENSION__) ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const initialState = {};
const Store = createStore(reducer, initialState, storeEnhancers);
sagaMiddleware.run(rootSagas);
export default Store;