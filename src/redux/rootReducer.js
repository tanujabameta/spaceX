import { combineReducers } from 'redux';
import launchDataReducer from './launchData/launchDataReducer';

const rootReducer= combineReducers({
    launchData : launchDataReducer  
})

export default rootReducer;
