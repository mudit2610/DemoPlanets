import { combineReducers } from 'redux';

import planetsReducer from './planets';
import detailsReducer from './details';

const appReducer = combineReducers({
    planets: planetsReducer,
    detail: detailsReducer,

});

const rootReducer = (state, action) => {
    // reset all data from here

    return appReducer(state, action);
};

export default rootReducer;