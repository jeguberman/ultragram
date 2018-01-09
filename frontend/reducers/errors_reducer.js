import { combineReducers } from 'redux';
import SessionErrors from './session_errors_reducer';
import ImageErrors from './image_errors_reducer.js';
// import UsersErrors from './users_errors_reducer';

const ErrorsReducer = combineReducers(
  {

    session: SessionErrors
    // image: ImageErrors

  }
);

export default ErrorsReducer;

    // users: UsersErrors,
