import { connect } from 'react-redux';
import { postImage } from '';

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postImage: (image) => dispatch(postImage(image)),
    updateImage: (image) => dispatch(updateImage(image)),
    deleteImage: (imageId) => dispatch(deleteImage(imageId))
  };
};
