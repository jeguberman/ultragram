import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import images from './images_reducer';
import users from './users_reducer';

const RootReducer = combineReducers(
  {
    session,
    users,
    images,
    errors
  }
);


export default RootReducer;
