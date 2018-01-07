import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    // console.log(props);
    super(props);
    this.state={username:"", password:"", fullname:"", formType: "Sign up"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.formType==="Sign up"){
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
      <div className="session-image-container">
        <img className="homePhones" src = {window.staticImages.homePhones} />


      </div>
    );
  }
  //
  // phoneImage(){
  //   return(
  //     <div className="phoneImage-container">
  //
  //       <img className="phoneImage" src={window.staticImages.alexGrey}/>
  //     </div>
  //   );
  // }

  listErrors(){
    if(this.props.errors){

      const errorList = this.props.errors.map(
        (error, idx) => {return <li key={idx}         className="session-error-item error">{error}</li>;}
      );

      return(
        <ul className="session-errors">{errorList}</ul>
      );

    }else{
      return null;
    }
  }

  fullname(){
    if(this.state.formType==="Sign up"){
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


        <div className="session-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h2 className="logo session-logo" > Ultragram</h2>


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
            {this.separatingOr()}
            {this.demoUser()}
            {this.listErrors()}


          </form>

          {this.navLink()}
        </div>
      </div>
    );
  }

  changeFormType(e){
    e.preventDefault();
    this.props.clearErrors();
    if(this.state.formType === "Sign up"){
      this.setState({formType:"Log in"});
    }else{
      this.setState({formType:"Sign up"});
    }
  }

  separatingOr(){
    return (
      <div className="orBorder">
        <div className="orLine"></div>
        <div className="orElement">OR</div>
        <div className="orLine"></div>
      </div>
  );
  }

  demoUser(){
    return (
      <a href="#"
        className="demo-user"

        onClick={
          (e) => {
            e.preventDefault();
            return (
              this.props.login({username:"demo", password:"password"})
            );
          }
        }

      >
      Log in with Demo User
    </a>
    );
  }





  navLink(){

    if(this.state.formType === "Sign up"){
      return(
        <div className="session-nav">
          Have an account?&nbsp;
          <a className="session-nav-link" href="#"  onClick={this.changeFormType}>Login</a>
        </div>
      );
    }else{
      return(
        <div className="session-nav">
          Don't have an account?&nbsp;
          <a className="session-nav-link" href="#" onClick={this.changeFormType}>Signup</a>
        </div>
      );
    }
  }






  render(){
    // if(this.props.loggedIn === true){
      // return(this.logoutButton());
    // }else{
      return(
        this.loginForm()
      );
    // }
  }

}

export default SessionForm;
