import {combineReducers} from 'redux';
import gallery from './gallery.reduser';
import online from './online.reduser';

const rootReducer = combineReducers({
  gallery,
  online,
});

export default rootReducer;
