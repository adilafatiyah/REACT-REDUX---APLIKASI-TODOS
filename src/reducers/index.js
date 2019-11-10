import {combineReducers} from 'redux'; //untuk lebih dari 1 reducer
import todos from './todos';
import filter from './filter';

export default combineReducers({
    todos,
    filter
})