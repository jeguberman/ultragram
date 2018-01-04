import { connect } from 'react-redux';
// import {with router}
import { login, logout, creatUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = (dispatch, ownProps ) => {

  return{
    login: (userData) => dispatch(login(userData)),
    logout: () => dispatch(logout()),
    createUser: (userData) => dispatch(createUser(userData))
  };


};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
