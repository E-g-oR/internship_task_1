import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "@redux-saga/core";
import appReducer from '../features/counter/counterSlice';

import { helloSaga } from "./sagas";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
   appReducer,
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(helloSaga)

export default store