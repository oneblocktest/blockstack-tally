import React,{Component}from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './pages'

class App extends Component{
  render(){
  return (
    <div className="site-wrapper">
    <div className="site-wrapper-inner">
      <Main />
    </div>
    </div>
  );
}
}

export default App;
