import React from 'react';
import styles from './style.less';
import {UserSession, AppConfig } from 'blockstack';
import Welcome from '../Welcome';

const appConfig = new AppConfig()  //app基本信息
export const userSession = new UserSession({ appConfig: appConfig })  //建立用户的session信息
const { handleSignIn } = this.props;

class Testlogin extends Component{

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
    <div className={styles.main}>
     
     <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
    </div>
  );
}
}

export default Testlogin
