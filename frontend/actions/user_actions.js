import * as UserAPI from '../util/user_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS='RECEIVE_USERS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

export const fetchUser = (username) => dispatch => {

  return (
    UserAPI.fetchUser(username).then(
      (payload) => dispatch(receiveUser(payload))
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

export const updateUser = (user) => dispatch => {
  return (
    UserAPI.updateUser(user).then(
      (rUser) => dispatch(receiveUser(user))
    )
  );
};

export const receiveUser = ( {user, images} ) => {
  return {
    type: RECEIVE_USER,
    user,
    images
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
