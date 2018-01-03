import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state={username:"from session form", password:""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.loggedIn === false){
      this.props.logIn(this.state);
    } else {
      this.props.signUp(this.state);
    }
  }

  update(field){
    return (e)=>{
      this.setState({[field]:e.target.value});
    };
  }

  loginForm(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> from login form</h1>

        <input type="text"
          onChange={this.update('text')}
          value={this.state.username}/>

        <input type="password"
          onChange={this.update('password')}
          value={this.state.password}/>

        <input type="submit" />

      </form>
    );
  }

  render(){
    return(this.loginForm());
  }

}

export default SessionForm;
