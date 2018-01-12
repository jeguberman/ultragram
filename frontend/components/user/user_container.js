import UserComponent from './user_component';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { fetchUser, updateUser } from '../../actions/user_actions';


const mapStateToProps = (state,ownProps) => {

  let userlist = Object.values(state.users);
  let images = Object.values(state.images);
  let user = userlist.find((u)=>u.username===ownProps.match.params.username);



  return {
    username: ownProps.match.params.username,
    user,
    images
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (username) => dispatch(fetchUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
