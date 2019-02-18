import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from '../reducers/index';

const logger = createLogger({collapsed: true});
export default createStore(rootReducer,
    applyMiddleware(
        logger,
        thunk
    ));