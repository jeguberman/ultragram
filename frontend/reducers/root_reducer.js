import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import images from './images_reducer';

const RootReducer = combineReducers(
  {
    errors,
    session,
    images
  }
);


export default RootReducer;
