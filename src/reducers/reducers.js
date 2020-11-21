import {combineReducers} from 'redux';
import {saveComment} from './saveComments'

export default combineReducers({comments: saveComment})