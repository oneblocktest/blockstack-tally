import React, { Component } from 'react';
import { Layout, Menu,Button,Avatar  } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import {
    Person,
  } from 'blockstack';
/* ";

import List from "./list"; */
import Setcategory from "./Setcategory";
import Welcome from "./welcome"

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件



export default class BasicLayout extends Component {
    state = {
        waterbill: [],
        category: [],
        cardservices:[],
        savingMe: false,
        redirectToMe: false,
        option: {}
      };


    constructor(props) {
        super(props);
    
        this.state = {
            person: {
                name() {
              return 'Anonymous';
            },
                avatarUrl() {
                  return avatarFallbackImage;
                }, 
           },
           page:"welcome"
          };

    }

     componentWillMount() {
            const { userSession } = this.props;
            this.setState({
              person: new Person(userSession.loadUserData().profile),
            });
          } 
 
    
    pagezhuan(){
        if(this.state.page==="welcome"){
            return  <Welcome />
        } 
        else if(this.state.page==="Setcategory"){
            return  <Setcategory />
        }else{
            return  <Welcome />
        }
    }

    render() {
        const { handleSignOut, userSession } = this.props;
        const { person } = this.state;
        return (
            <Layout>
            <Sider width={256} style={{ minHeight: '100vh' }}>
                <div style={{ height: '58px', background: 'rgba(255,255,255,.2)', margin: '16px' }}>
                <div style={{textAlign: 'center',size:64}}>
                Tally
                 </div>
                </div>
              <Menu theme="dark" mode="inline">
              
                    <Menu.Item onClick={() => this.setState({ page: "welcome" })}> <span>欢迎</span></Menu.Item>
                    <Menu.Item onClick={() => this.setState({ page: "list" })}>查询搜索</Menu.Item>
                    <Menu.Item onClick={() => this.setState({ page: "Setcategory" })}>设置</Menu.Item>
                </Menu>
            </Sider>  
                <Layout >
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                  
                        <div>
                            <div style={{ background: '#fff', textAlign: 'right', padding: 0 }}>
                            <Avatar size="large" icon={<img src={person.avatarUrl()}/> } />
                            <Button  onClick={handleSignOut.bind(this)} >Logout</Button>
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                          {this.pagezhuan()}
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}


