import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state={username:"", password:"", fullname:"", formType: "signup"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.formType==="signup"){
      this.props.createUser(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  update(field){
    return (e)=>{
      this.setState({[field]:e.target.value});
    };
  }

  sessionImage(){
    return(
      <div className="session-image-container session-left">
        <img className="session-image" src = {window.staticImages.homePhones} />
      </div>
    );
  }

  fullname(){
    if(this.state.formType==="signup"){
      return(
        <input className="session-input"
            type="fullname"
            onChange={this.update('fullname')}
            placeholder="Fullname"
            value={this.state.fullname}/>
      );
    }else{
      return null;
    }
  }


  loginForm(){
    return (
      <div className="session-view">
        {this.sessionImage()}


        <div className="session-container session-right">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h2 className="logo" > Ultragram</h2>

            {this.fullname()}

            <input className="session-input"
              type="username"
              onChange={this.update('username')}
              placeholder="Username"
              value={this.state.username}/>



            <input className="session-input"
              type="password"
              onChange={this.update('password')}
              placeholder="Password"
              value={this.state.password}/>


            <input className="session-input session-button" type="submit" value={this.state.formType}/>


          </form>

          {this.navLink()}
        </div>
      </div>
    );
  }

  changeFormType(e){
    e.preventDefault();
    if(this.state.formType === "signup"){
      this.setState({formType:"login"});
    }else{
      this.setState({formType:"signup"});
    }
  }

  logoutButton(){
    return(<button onClick={this.props.logout}>Logout: Also, you shouldn't be seeing this</button>);
  }

  navLink(){
    if(this.state.formType === "signup"){
      return(
        <div className="session-nav">
          <div>Have an account?</div>
          <a href="#"  onClick={this.changeFormType}>Login</a>
        </div>
      );
    }else{
      return(
        <div className="session-nav">
          <div>Don't have an account?</div>
          <a href="#" onClick={this.changeFormType}>Signup</a>
        </div>
      );
    }
  }




  render(){
    if(this.props.loggedIn === true){
      return(this.logoutButton());
    }else{
      return(
        this.loginForm()
      );
    }
  }

}

export default SessionForm;
