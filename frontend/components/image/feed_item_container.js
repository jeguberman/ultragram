import FeedItemComponent from './feed_item_component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postLike, deleteLike } from '../../actions/like_actions.js';

const mapStateToProps = (state, {image}) => {
  let currentUserID = state.session.currentUserID;
  let author = state.users[image.author_id];
  let likes = image.likes;
  let liked = likes.some( (el) => el.id===currentUserID);
  return {
    image,
    currentUserID,
    author,
    likes,
    liked
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postLike: (like) => dispatch(postLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedItemComponent));

// export default withRouter(connect(null, null)(FeedItemComponent));
