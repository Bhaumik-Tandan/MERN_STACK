import Login from "./login"
import Signup from "./Signup"
import React, { Component } from 'react';
class Landing extends Component{
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
    <div className="Landing">
    </div>
    );
  }
}
export default Landing;