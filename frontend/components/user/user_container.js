import UserComponent from './user_component';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { fetchUser, updateUser } from '../../actions/user_actions';
import find from 'lodash/find';
import pickBy from 'lodash/pickby';
import startsWith from 'lodash/startsWith';
import forOwn from 'lodash/forOwn';

const mapStateToProps = ({users, images},ownProps) => {

  return {
    username: ownProps.match.params.username,
    users,
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


// const users = state

// let userlist = Object.values(state.users);
// let images = Object.values(state.images);
// let user;
//
// userlist = userlist.filter(
//   (user) => {
//     return user.username==="demo";
//   }
// );
//
// if( userlist.length !== 0 ){
//   user = userlist[0];
//   images = images.filter(
//     (image) => image.author.id===user.id
//   );
// }
//
// //hey fuck javascript sometimes, amirite?
