import React, { Component } from 'react';
import  { Button } from 'antd';

export default class Login extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
        <div>
      
          <Button
          
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </Button>
        
      </div>
    );
  }
}
