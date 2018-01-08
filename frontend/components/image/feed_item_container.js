import FeedItemComponent from './feed_item_component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchImage } from '../../actions/image_actions.js';

const mapStateToProps = (state, {image}) => {

  return {
    image
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchImage: (id) => dispatch(fetchImage(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedItemComponent));
