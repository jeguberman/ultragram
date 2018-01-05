import UserComponent from './user_component';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
  return {
    userId: ownProps.match.params.userId
  };
};

export default withRouter(connect(mapStateToProps, null)(UserComponent));
