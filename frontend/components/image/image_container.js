import ImageComponent from './image_component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchImage } from '../../actions/image_actions.js';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    id: ownProps.match.params.imageId,
    images: state.images

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchImage: (id) => dispatch(fetchImage(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImageComponent));
