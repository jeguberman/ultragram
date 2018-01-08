import FeedItemComponent from './feed_item_component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, {image}) => {

  return {
    image
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedItemComponent));
