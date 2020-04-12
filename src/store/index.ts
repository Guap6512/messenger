import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {rootReducer} from './root-reducer';
import {rootSaga} from './root-saga';

export const configureStore = (initialState?) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
    );
    sagaMiddleware.run(rootSaga);

    return store;
};
