import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from '../reducers/index';

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({collapsed: true});
    middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));