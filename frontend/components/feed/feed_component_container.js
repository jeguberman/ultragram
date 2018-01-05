import { connect } from 'react-redux';
import FeedComponent from './feed_component';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({});
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
      logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps,
   mapDispatchToProps)(FeedComponent);
