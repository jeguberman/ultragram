import { connect } from 'react-redux';
// import {with router}
import { login, logout, creatUser, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),//delete
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps ) => {
  return{
    login: (userData) => dispatch(login(userData)),
    logout: () => dispatch(logout()),//delete
    createUser: (userData) => dispatch(createUser(userData)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
