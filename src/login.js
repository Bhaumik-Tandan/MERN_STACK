import "./login.css";
import React, { Component } from 'react';
class Login extends Component {
    constructor(p)
    {
        super(p);
        this.change=this.change.bind(this);
        this.login=this.login.bind(this);
    }
    login()
    {
        console.log("sdf");
    }
     change()
    {
       this.props.fun.setState({l:false});
    }
    render(){
  return (
      <div  className="form">
    <div className="login-page">
        <form className="login-form">
            <input type="text" placeholder="Roll Number" name="rn" id="rnl" />
            <input type="password" placeholder="password" name="password" id="password1" />
            <input type="button" onClick={this.login}  name="submit" value="Login" className="submit"></input>
            <p className="error2"></p>
            <p className="message">Not registered? <button type="button" onClick={this.change}>Create an account</button></p>
        </form>
    </div>
    </div>
  );
    }
}

export default Login;
