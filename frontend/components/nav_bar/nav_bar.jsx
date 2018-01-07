import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBarComponent extends React.Component{

  logoutButton(){
    return(<button onClick={this.props.logout}>Logout</button>);

  }

  navBranding(){
    return(
      <Link to="/" className="nav-branding">
        <img src={window.staticImages.iconColor} />
        <h2 className="logo"> Ultragram</h2>
      </Link>
    );
  }

  navUserTools(){
    return (
      <div className="nav-user-tools">
        <i class="photo icon"></i>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.navBranding()}
        Greetings from the nav bar, you've logged in. Please {this.logoutButton()}
      </div>
    );
  }
}

export default NavBarComponent;
