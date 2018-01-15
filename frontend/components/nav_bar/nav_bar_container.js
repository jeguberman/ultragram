import { connect } from 'react-redux';
import NavBarComponent from './nav_bar.jsx';
import {logout} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    currentUserID: state.session.currentUserID,
    user: state.users[state.session.currentUserID]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: ()=>dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
