import { connect } from 'react-redux';
// import {with router}
import { login, logout, creatUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps ) => {

  return{
    login: (userData) => dispatch(login(userData)),
    logout: () => dispatch(logout()),
    createUser: (userData) => dispatch(createUser(userData)),
    clearErrors: () => clearErrors()
  };


};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
