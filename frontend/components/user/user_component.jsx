import React from 'react';

class UserComponent extends React.Component{

  componentWillMount(){
    this.props.fetchUser(this.props.username);
  }

  imageList(){
    // this.props.images;
  }

  render(){
        debugger
    return(<div className="user-show"></div>);
  }

  componentDidMount(){

  }

}
export default UserComponent;
