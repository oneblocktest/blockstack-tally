import React, { Component } from 'react';
import { Layout, Menu,Button,Avatar  } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import {
    Person,
    AppConfig
  } from 'blockstack';
 

import Setcategory from "./Setcategory";
import Welcome from "./welcome"
import SearchQuery from "./SearchQuery"
export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const WATEBILL_FILENAME = 'waterbill.json'         //gaia保存路径
export const CATEGORY_FILENAME = 'category.json' 
export const CARDSERVICES_FILENAME = 'cardservices.json' 
export const MYTALLY_FILENAME = "MYTALLY.json"

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件



export default class BasicLayout extends Component {

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
        category: {
            "revenue":[
                {"name":"餐饮"},
                {"name":"娱乐"},
                {"name":"学习"},
                {"name":"交通"},
                {"name":"通讯"},
                {"name":"其他"},
            ],
            "payment":[
                 {"name":"工资"},
                 {"name":"业务"},
                 {"name":"投资"}
            ],
            "disregard":[
                 {"name":"信用卡还款"},
                 {"name":"卡内转账"},
                 {"name":"还贷款"},
            ]
        },
        cardservices:{
            credit: [ //贷记账户
              {
                "card": "花呗",
                "update": "31", //信用卡账单日期
                "balance": "-11"
              }
            ],
            "debit": [ //借记账户
              {
                "card": "余额宝",
                "update": "31",
                "balance": "100"
              },
              {
                "card": "现金",
                "update": "31",
                "balance": "200"
              }
            ]
          },
        savingMe: false,
        redirectToMe: false,
        option: {}  
          };

    }




     componentWillMount() {
            const { userSession } = this.props;
            this.setState({
              person: new Person(userSession.loadUserData().profile),
            });
           // console.log(this.state.person)
           this.loadMe()
          } 

    sethandlecatchange = setting =>{                          //设置类别
      this.setState({ category:setting});
     // console.log(this.state)
    }     
    sethandlecardchange = setting =>{                         //设置账户
      this.setState({ cardservices:setting});
    }     

    handleSubmit = bill => {
            
            this.setState({ waterbill: [...this.state.waterbill, bill.bill]});
         //   console.log(this.state);
         
          } 
    
    removeCharacter = index => {
            const { waterbill } = this.state
            index=waterbill.length-index-1
           // console.log(index)
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
            return  <Setcategory category={this.state.category} 
                      cardservices={this.state.cardservices} 
                      sethandlecatchange={this.sethandlecatchange} 
                      sethandlecardchange={this.sethandlecatchange} />
        }else if(this.state.page==="SearchQuery"){
            return  <SearchQuery />
        }
    }

    render() {
        const { handleSignOut } = this.props;
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
                    <Button type="primary" onClick={()=>this.saveMe()}>保存</Button>
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Blockstack-Tally ©2020 Created by Tally Team</Footer>
                </Layout>
            </Layout>
        )
    }


    loadMe() {
      const { userSession } = this.props;
      const options = { decrypt: false}
      userSession.getFile(MYTALLY_FILENAME, options)
        .then((content) => {
          if (content) {
            const mytally = JSON.parse(content)
            this.setState({ waterbill:mytally.waterbill, redirectToMe: false })
            this.setState({ category:mytally.category, redirectToMe: false })
            this.setState({ cardservice:mytally.waterbill, redirectToMe: false })
            
  
            
          } else {
           // const me = null
           // this.setState({ character:me,redirectToMe: true })
          }
        })
    } 


    saveMe() {                    //保存上传gaia
       // console.log(JSON.stringify(me))
      const mytally={
         waterbill:this.state.waterbill,
         category:this.state.category,
         cardservices:this.state.cardservice
      }
        const { userSession } = this.props;
        this.setState({ savingMe: true })
        const options = { encrypt: false }
        console.log(JSON.stringify(mytally))     
       userSession.putFile(MYTALLY_FILENAME, JSON.stringify(mytally), options)
          .finally(() => {
             this.setState({ savingMe: false, redirectToMe: false })
           }) 
    } 
}
//onClick={this.saveMe(this.state.waterbill,WATEBILL_FILENAME)}



