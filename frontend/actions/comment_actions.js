import * as CommentAPI from '../util/comments_util';
import { receiveImage } from './image_actions';

// export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const postComment = (commentData) => dispatch => {
  CommentAPI.postComment(commentData)
  .then(
    (image) => (dispatch(receiveImage(image)))
  );
};
