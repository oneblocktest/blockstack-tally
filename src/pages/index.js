import React, { Component } from 'react';
import {UserSession, AppConfig } from 'blockstack';
import Login from './login';
import Baics from './baisc';


export const appConfig = new AppConfig(['store_write', 'publish_data'])  //app基本信息
export const userSession = new UserSession({ appConfig: appConfig })  //建立用户的session信息

export default class Main extends Component{


handleSignIn(e) {                //登录改变userSession属性
    e.preventDefault();
    userSession.redirectToSignIn();
  }
  handleSignOut(e) {          //退出
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }



  render() {
    return (
        <div >
     
   
          { !userSession.isUserSignedIn() ?
            <Login userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Baics userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        
        </div>
     
    );

  }
  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
  }
}





