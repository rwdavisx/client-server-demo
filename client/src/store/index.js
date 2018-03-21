import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {fetchGames} from './actions/index';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store
    .dispatch(fetchGames(5))
    .then(() => console.log(store.getState()));