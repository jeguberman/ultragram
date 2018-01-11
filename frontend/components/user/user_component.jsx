import React from 'react';

class UserComponent extends React.Component{

  componentWillMount(){
    this.props.fetchUser(this.props.userId);
  }

  render(){
    return(<div>from user component</div>);
  }

}
export default UserComponent;
