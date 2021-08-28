import Login from "./login"
import Signup from "./Signup"
import React, { Component } from 'react';
class Main extends Component{
  constructor(p)
  {
    super(p);
    this.state={
      l:true
    };
  }
  render()
  {
    return(
    <div className="Main">
      {this.state.l?<Login fun={this}></Login>:
      <Signup fun={this}></Signup>}
    </div>
    );
  }
}
export default Main;