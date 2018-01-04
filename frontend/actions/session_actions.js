import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const createUser = user => dispatch =>{
  APIUtil.createUser(user)
  .then(
    (rUser) => (
      dispatch(receiveCurrentUser(rUser))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(
    user => (
      dispatch(receiveCurrentUser(null))
    )
  )
);

export const login = user => dispatch => {
// debugger
console.log('login thunk hit')
  return (
    APIUtil.login(user)
    .then(
      user => (
        dispatch(receiveCurrentUser(user))
      ),
      err => (
        dispatch(receiveErrors(err.responseJSON))
      )
    )
  );
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () =>{
  // debugger
  return(
    dispatch({
      type: RECEIVE_SESSION_ERRORS,
      errors: null
    })
  );
};


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
