import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';

const RootReducer = () => {
  return combineReducers({
    session: sessionReducer
  });
};

export default RootReducer;
