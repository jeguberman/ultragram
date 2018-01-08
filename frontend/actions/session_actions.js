import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const createUser = user => dispatch =>{
  APIUtil.createUser(user)
  .then(
    (rUser) => (
      dispatch(receiveCurrentUser(rUser))
    ),
    error => (
      dispatch(receiveErrors(error.responseJSON))
    )
  );
};

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(
    user => (
      dispatch(removeCurrentUser(null))
    )
  )
);

export const login = user => dispatch => {
  return (
    APIUtil.login(user)
    .then(
      user => (
        dispatch(receiveCurrentUser(user))
      ),
      error => (
        dispatch(receiveErrors(error.responseJSON))
      )
    )
  );
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () =>{
  return(
    dispatch({
      type: RECEIVE_SESSION_ERRORS,
      errors: null
    })
  );
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
