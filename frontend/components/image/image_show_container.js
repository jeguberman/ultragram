import ImageShowComponent from './image_show_component';
import {fetchImage} from '../../actions/image_actions';
import {fetchUser} from '../../actions/user_actions';
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.match.params.id,

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchImage: (imageId)=>dispatch(fetchImage(imageId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageShowComponent);
