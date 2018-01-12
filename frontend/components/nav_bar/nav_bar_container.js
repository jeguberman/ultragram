import { connect } from 'react-redux';
import NavBarComponent from './nav_bar.jsx';
import {logout} from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[state.session.currentUserID],
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: ()=>dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
