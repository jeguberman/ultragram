import ImageShowComponent from './image_show_component';
import {fetchImage} from '../../actions/image_actions';
import {fetchUser} from '../../actions/user_actions';
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  if (Object.keys(state.images).length !== 0){
    let image = state.images[id];
    let author = state.users[image.author_id];
    return {
      id,
      image,
      author
    };
  }
  return(
    {id}
  );



};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchImage: (imageId)=>dispatch(fetchImage(imageId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageShowComponent);
