import React, { Component } from 'react';
import  { Button,Avatar,Row} from 'antd';

export default class Login extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>
        <div style={{ textAlign:" center"}}>
          <div> <Avatar shape="square" size={78} icon={<img src="./logo512.png"/> } /> <h1>blockstack-Tally</h1> </div> 
          <div>
          <Button type="primary" size={78} onClick={ handleSignIn.bind(this) }>
            Sign In with Blockstack
          </Button>
         </div>
      </div>
      </Row>
    );
  }
}
