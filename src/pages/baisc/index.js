import React, { Component } from 'react';
import { Layout, Menu,Button,Avatar,message  } from 'antd';
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
          payment:[
                {name:"餐饮"},
                {name:"娱乐"},
                {name:"学习"},
                {name:"交通"},
                {name:"通讯"},
                {name:"其他"},
            ],
            revenue:[
                 {name:"工资"},
                 {name:"业务"},
                 {name:"投资"}
            ],
            disregard:[
                 {name:"信用卡还款"},
                 {name:"卡内转账"},
                 {name:"还贷款"},
            ]
        },
        cardservices:{
            credit: [ //贷记账户
              {
                card: "花呗",
                update: "31", //信用卡账单日期
                balance: "-11"
              }
            ],
            debit: [ //借记账户
              {
                card: "余额宝",
                update: "31",
                balance: "100"
              },
              {
                card: "现金",
                update: "31",
                balance: "200"
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
           console.log(this.state.person)
           this.loadMe()
          } 

    sethandlecatchange = setting =>{                          //设置类别
      this.setState({ category:setting});
      message.success('提交成功')
     // console.log(this.state)
    }     
    sethandlecardchange = setting =>{                         //设置账户
      this.setState({ cardservices:setting});
      message.success('提交成功')
    }     

    handleSubmit = bill => {
            
            this.setState({ waterbill: [...this.state.waterbill, bill.bill]});
            let newcardservices=this.state.cardservices
            for(let x in newcardservices.debit ){
                  if(bill.bill.card==newcardservices.debit[x].card){
                    //console.log(newcardservices.debit[x].balance)
                   // console.log(bill.bill.amount)
                    newcardservices.debit[x].balance=parseFloat(newcardservices.debit[x].balance)+parseFloat(bill.bill.amount)
                    
                   this.setState({cardservices:newcardservices});
                   // console.log(this.state)
                  }
            }
           // this.setState({ cardservices:newcardservices});
                 //   console.log(JSON.stringify(this.state))
         //   console.log(this.state);
         
          } 
    
    removeCharacter = index => {
            const { waterbill } = this.state
            let newcardservices=this.state.cardservices
            index=waterbill.length-index-1
            for(let x in newcardservices.debit ){
              if(waterbill[index].card==newcardservices.debit[x].card){
                console.log(newcardservices.debit[x].balance)
                console.log(waterbill[index].amount)
                newcardservices.debit[x].balance=parseFloat(newcardservices.debit[x].balance)-parseFloat(waterbill[index].amount)
                
               this.setState({cardservices:newcardservices});
                console.log(this.state)
              }
        }
           // console.log(index)
            this.setState({
                waterbill:waterbill.filter((bill, i) => {
                return i !== index
              }),
            })
          }
    
    pagezhuan(){
        if(this.state.page==="welcome"){
            return  <Welcome waterbill={this.state.waterbill} 
                      handleSubmit={this.handleSubmit} 
                      removeCharacter={this.removeCharacter} 
                      category={this.state.category}
                      cardservices={this.state.cardservices}
                      />
        } 
        else if(this.state.page==="Setcategory"){
            return  <Setcategory category={this.state.category} 
                      cardservices={this.state.cardservices} 
                      sethandlecatchange={this.sethandlecatchange} 
                      sethandlecardchange={this.sethandlecardchange} />
        }else if(this.state.page==="SearchQuery"){
            return  <SearchQuery 
            waterbill={this.state.waterbill}
            cardservices={this.state.cardservices}  />
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
                            <div style={{ background: '#fff', textAlign: 'right', padding: 0 }}>
                            <Avatar size="large" icon={<img src={person.avatarUrl()}/> } />
                            <Button type="primary"  onClick={handleSignOut.bind(this)} >Logout</Button>
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
       // console.log(content)
          if (content) {
            const mytally = JSON.parse(content)
            this.setState({ waterbill:mytally.waterbill, category:mytally.category,cardservices:mytally.cardservices,redirectToMe: false })
         
          } else {
            const me =  [
              {
                  date: "20200420",
                  item: "数据加载不成功",
                  type: "交通",
                  amount: "-100",
                  card: "农行"
              }
            ]
            this.setState({ waterbill:me,redirectToMe: true })
          }
        })
    } 


    saveMe() {                    //保存上传gaia
       // console.log(JSON.stringify(me))
      const mytally={
         waterbill:this.state.waterbill,
         category:this.state.category,
         cardservices:this.state.cardservices
      }
        const { userSession } = this.props;
        this.setState({ savingMe: true })
        const options = { encrypt: false }
        console.log(JSON.stringify(mytally))     
       userSession.putFile(MYTALLY_FILENAME, JSON.stringify(mytally), options)
          .finally(() => {
             this.setState({ savingMe: false, redirectToMe: false })
             message.success('保存成功')
           }) 
    } 
}
//onClick={this.saveMe(this.state.waterbill,WATEBILL_FILENAME)}



