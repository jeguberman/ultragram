import FeedItemComponent from './feed_item_component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, {image}) => {

  let author = state.users[image.author_id];
  return {
    image,
    author
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {


  };
};

export default withRouter(connect(mapStateToProps, null)(FeedItemComponent));
