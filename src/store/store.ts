import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import userReducer from './reducers/user';
import thunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const rootReducer = combineReducers({ user: userReducer });
export const store = createStore(
    rootReducer,
    composeEnhancers?.(applyMiddleware(thunk))
);
