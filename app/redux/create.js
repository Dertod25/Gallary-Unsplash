import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redusers/root.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export default function create() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
