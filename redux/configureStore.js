import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dogs } from './dogs';
import { comments } from './comments';
import { partners } from './partners';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dogs,
            comments,
            partners,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}