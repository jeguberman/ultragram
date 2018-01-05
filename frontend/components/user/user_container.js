import UserComponent from './user_component';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';



export default withRouter(connect(null, null)(UserComponent));
