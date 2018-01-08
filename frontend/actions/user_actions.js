import * as UserAPI from '../util/user_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS='RECEIVE_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

export const fetchUser = (id) => dispatch => {
  return (
    UserAPI.fetchUser(id).then(
      (user) => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const fetchUsersByIds = (idArray) => dispatch => {

  return (
    UserAPI.fetchUsersByIds(idArray).then(
      (users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

const receiveUser = (user) => {

  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveErrors = (errors) => {

  return {
    type: RECEIVE_USERS_ERRORS,
    errors
  };
};
