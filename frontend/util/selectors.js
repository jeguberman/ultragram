import fetchUsersByIds from '../actions/user_actions';
import uniq from 'lodash/uniq';

export const authorsOfImages = (imageArray) => {
  let authorIds = imageArray.map((image)=>(image.author_id));
  return uniq(authorIds);
};//takes an array of image objects and returns an array of authors by author_id on those objects
