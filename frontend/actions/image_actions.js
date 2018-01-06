import * as ImageAPI from '../util/image_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const fetchImages = () => dispatch => {
  ImageAPI.fetchImages()
  .then(
    (images) => (dispatch(receiveImages(images))),
    (error) => (dispatch(receiveErrors(error.responseJSON)))
  );
};

export const fetchImage = (id) => dispatch => {
  ImageAPI.fetchImage(id)
  .then(
    (image) => {
      return (dispatch(receiveImage(image)));
    },
    (error) => {
      return (dispatch(receiveErrors(error.responseJSON)));
    }
  );
};

export const fetchImagesByUser = (userId) => dispatch => {
  ImageAPI.fetchImage(userId)
  .then(
    (images) => (dispatch(receiveImages(images))),
    (error) => (dispatch(receiveErrors(error.responseJSON)))
  );
};

export const postImage = (imageDate) => dispatch => {
  ImageAPI.postImage(imageDate)
  .then(
    (rImages) => (dispatch(receiveImage(rImage))),
    (error) => (dispatch(receiveErrors(error.responseJSON)))
  );
};

export const updateImage = (imageDate) => dispatch => {
  ImageAPI.postImage(imageData)
  .then(
    (rImages) => (dispatch(receiveImage(rImage))),
    (error) => (dispatch(receiveErrors(error.responseJSON)))
  );
};

export const deleteImage = (imageId) => dispatch => {
  ImageAPI.deleteImage(imageId)
  .then(
    ()=>(dispatch(removeImage(imageId))),
    (error) => (dispatch(receiveErrors(error.responseJSON)))
  );
};

const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

const receiveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  };
};

const removeImage = (imageId) => {
  return {
    type: REMOVE_IMAGE,
    imageId
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
    errors: null
  };
};
