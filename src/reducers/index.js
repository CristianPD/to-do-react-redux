/**
 * Created by Cristian on 4/16/2017.
 */
import {combineReducers} from 'redux';
import items from './itemReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    items,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;

