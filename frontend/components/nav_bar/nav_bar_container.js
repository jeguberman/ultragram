import { connect } from 'react-redux';
import NavBarComponent from './nav_bar.jsx';
import {logout} from '../../actions/session_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    //you'll want the current user's name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: ()=>dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
