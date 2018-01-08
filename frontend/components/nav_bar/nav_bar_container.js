import { connect } from 'react-redux';
import NavBarComponent from './nav_bar.jsx';
import {logout} from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: ()=>dispatch(logout()),
    fetchUser: (id)=>dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
