import { RECEIVE_IMAGE, RECEIVE_IMAGES, RECEIVE_IMAGE_ERRORS } from '../actions/image_actions';
const ImageErrorsReducer = (oldState = {}, action) => {

  switch (action.type) {
    case RECEIVE_IMAGE_ERRORS:
      return action.errors;
    case RECEIVE_IMAGE:
      return null;
    case RECEIVE_IMAGES:
      return null;
    default:
      return oldState;
  }
};

export default ImageErrorsReducer;
