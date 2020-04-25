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
import SearchQuery from "./SearchQuery"


export const WATEBILL_FILENAME = 'waterbill.json'         //gaia保存路径
export const CATEGORY_FILENAME = 'category.json' 
export const CARDSERVICES_FILENAME = 'cardservices.json' 


const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件



export default class BasicLayout extends Component {
/*     state = {
        
        category: [],
        cardservices:[],
        savingMe: false,
        redirectToMe: false,
        option: {}
      };
 */

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
           page:"welcome",
           waterbill: [
            {
                date: "20200420",
                item: "加油",
                type: "交通",
                amount: "-200",
                card: "农行"
            },
            {
                date: "20200421",
                item: "加油",
                type: "交通",
                amount: "-200",
                card: "农行"
            },
            {
                date: "20200422",
                item: "加油",
                type: "交通",
                amount: "-200",
                card: "农行"
            },
            {
                date: "20200423",
                item: "加油",
                type: "交通",
                amount: "-200",
                card: "农行"
            },
        ],
        //savingMe: false,
      //  redirectToMe: false,
           
          };

    }


  /*   saveMe(me,file) {
        const { userSession } = this.props;
        this.setState( {savingMe: true })
        let test = JSON.stringify(me);
        console.log(test);
        const options = { encrypt: true }
        userSession.putFile(file, JSON.stringify(me), options)
          .finally(() => {
            this.setState({ savingMe: false, redirectToMe: false })
          })
      } */

     componentWillMount() {
            const { userSession } = this.props;
            this.setState({
              person: new Person(userSession.loadUserData().profile),
            });
          } 

    handleSubmit = bill => {
            
            this.setState({ waterbill: [...this.state.waterbill, bill.bill]});
            console.log(this.state);
         
          } 
    
    removeCharacter = index => {
            const { waterbill } = this.state
            index=waterbill.length-index-1
            console.log(index)
            this.setState({
                waterbill:waterbill.filter((bill, i) => {
                return i !== index
              }),
            })
          }
    
    pagezhuan(){
        if(this.state.page==="welcome"){
            return  <Welcome waterbill={this.state.waterbill} handleSubmit={this.handleSubmit} removeCharacter={this.removeCharacter} />
        } 
        else if(this.state.page==="Setcategory"){
            return  <Setcategory />
        }else if(this.state.page==="SearchQuery"){
            return  <SearchQuery />
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
                    <Menu.Item onClick={() => this.setState({ page: "SearchQuery" })}>查询搜索</Menu.Item>
                    <Menu.Item onClick={() => this.setState({ page: "Setcategory" })}>设置</Menu.Item>
                </Menu>
            </Sider>  
                <Layout >
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                  
                        <div>
                            <div style={{ background: '#fff', textAlign: 'right', padding: 0 }}>
                            <Avatar size="large" icon={<img src={person.avatarUrl()}/> } />
                            <Button type="primary"  onClick={handleSignOut.bind(this)} >Logout</Button>
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                          {this.pagezhuan()}
                    <Button type="primary">保存</Button>
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
//onClick={this.saveMe(this.state.waterbill,WATEBILL_FILENAME)}


