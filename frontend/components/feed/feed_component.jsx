import React from 'react';

class FeedComponent extends React.Component{

  render(){
    return(
      <div>
        future sight of feed component. In the meantime, why don't you  {this.logoutButton()}? Or visit your fake {this.userLink()}
      </div>);
  }

  logoutButton(){
    return(<button onClick={this.props.logout}>log out</button>);
  }

  userLink(){
    return(<p> LINK TO USER PAGE</p>);
  }



}

export default FeedComponent;
