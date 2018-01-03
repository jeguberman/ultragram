import { combineReducers } from 'redux';
import SessionErrors from './session_errors_reducer';

const ErrorsReducer = combineReducers(
  {
    SessionErrors
  }
);

export default ErrorsReducer;
