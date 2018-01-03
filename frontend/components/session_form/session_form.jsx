import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state={username:"", password:"", formType: "signup"};
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

  loginForm(){
    return (
      <div>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <h2 className="logo" > Ultragram</h2>

          <label>Username:
            <input type="username"
              onChange={this.update('username')}
              value={this.state.username}/>
          </label>

          <label>Password:
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}/>
          </label>

          <input type="submit" />


        </form>
        {this.navLink()}
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
    return(<button onClick={this.props.logout}>Logout</button>);
  }

  navLink(){
    if(this.state.formType === "signup"){
      return(
        <a href="#" onClick={this.changeFormType}>Login instead</a>
      );
    }else{
      return(
        <a href="#" onClick={this.changeFormType}>Signup instead</a>
      );
    }
  }

  frontimage



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
