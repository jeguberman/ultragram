import * as APIUtil from '../util/image_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const fetchImage = (id) => dispatch => {
  APIUtil.fetchImage(id)
  .then(
    (image) => (dispatch(receiveImage(image))),
    (error) => (dispatch(receiveErrors(error.responsJSON)))
  );
};

const receiveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  };
};
