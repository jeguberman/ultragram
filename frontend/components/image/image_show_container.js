import ImageShowComponent from './image_show_component';
import { fetchImage, deleteImage } from '../../actions/image_actions';
import { updateUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { postLike, deleteLike } from '../../actions/like_actions.js';




const mapStateToProps = (state, ownProps) => {

  let currentUserID = state.session.currentUserID;
  let id = ownProps.match.params.id;
  if (Object.keys(state.images).length !== 0){
    let image = state.images[id];
    let author = state.users[image.author_id];
    let comments = state.images[id].comments;
    let likes = state.images[id].likes;

    let liked = likes.some( (el) => el.id===currentUserID);
    return {
      id,
      image,
      author,
      currentUserID,
      comments,
      likes,
      liked
    };
  }
  return(
    {id}
  );



};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchImage: (imageId)=>dispatch(fetchImage(imageId)),
    deleteImage: (imageId)=>dispatch(deleteImage(imageId)),
    // updateUser: (user)=>dispatch(updateUser),
    postLike: (like) => dispatch(postLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageShowComponent);
