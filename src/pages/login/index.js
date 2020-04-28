import React, { Component } from 'react';
import  { Button,Row,Col } from 'antd';

export default class Login extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
        <div>

          <Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>
            <img src="./blackgroud.jpg" />
      
          <Button type="primary" shape="circle"
          
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </Button>
          </Row>
      </div>
    );
  }
}
