import { connect } from 'react-redux';
import { postImage } from '../../actions/image_actions';
import ImageForm from './image_form_component';
const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.formType;
  const currentUser = state.session.currentUser.id;
  const imageErrors = state.errors.images
  return {
    currentUser,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postImage: (image) => dispatch(postImage(image)),
    updateImage: (image) => dispatch(updateImage(image)),
    deleteImage: (imageId) => dispatch(deleteImage(imageId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);
