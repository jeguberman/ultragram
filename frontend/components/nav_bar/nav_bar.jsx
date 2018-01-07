import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Camera from 'react-icons/lib/fa/camera';
import Signout from 'react-icons/lib/fa/sign-out';
import User from 'react-icons/lib/fa/user';

class NavBarComponent extends React.Component{

  logoutButton(){
    return(<button onClick={this.props.logout}>Logout</button>);

  }

  navBranding(){
    return(
      <Link to="/" className="nav-branding">
        <img className="nav-icon icon" src={window.staticImages.iconBlack} />
        <div className="nav-branding-line"></div>
        <div className="logo nav-logo"> Ultragram</div>
      </Link>
    );
  }

  navSearch(){
    return(
      <div className="nav-search"></div>
    );
  }

  navUserTools(){
    return (
      <div className="nav-user-tools">

        <button className="nav-tool nav-signout"
          onClick={this.props.logout}>
        </button>

        <Link to="/">
          <div className="nav-tool nav-camera"></div>
        </Link>

        <Link to="/">
          <div className="nav-tool  nav-user user"></div>
        </Link>


      </div>
    );
  }

  render(){
    return(
      <div>

        <div className="nav-background">
          <div className="nav-bar">
            {this.navBranding()}
            {this.navSearch()}
            {this.navUserTools()}
          </div>
        </div>
        <div className="header-buffer"></div>

      </div>
    );
  }
}

export default NavBarComponent;