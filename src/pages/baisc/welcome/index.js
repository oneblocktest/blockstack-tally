import React, { Component } from 'react';
import styles from './index.less';
import { Row, Col, Card } from "antd";
import Waterbill from "./waterbill";
import Formdata from "./fromdata";
import { getbalance,getcategorTotal,getcredittotal } from "./models/getdatamodel.js"
//import Piechartdata from "./piechartdata";
import  Piechartdata from "./piechartdata";



export default class Welcome extends Component {
   /*  constructor(props) {
        super(props)
    } */

    render() {

        const mydata="本月余额：" + getbalance(this.props.cardservices.debit).balancetotal
        const revenuetotal="本月收入：" +  getcategorTotal(this.props.waterbill,this.props.category.revenue).categorTotal
        const paymenttotal="本月支出：" +  getcategorTotal(this.props.waterbill,this.props.category.payment).categorTotal
        const lastcredittotal="上月欠款：" +  getcredittotal(this.props.waterbill,this.props.cardservices.credit,1)
        const credittotal="本月欠款：" +  getcredittotal(this.props.waterbill,this.props.cardservices.credit,0)
        const nextcredittotal="下月欠款：" +  getcredittotal(this.props.waterbill,this.props.cardservices.credit,-1)
        return (
        <div>
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={6}>
                                <Card
                                    title={mydata}
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width: 260,
                                    }}
                                >
                                  <Piechartdata chartdata={getbalance(this.props.cardservices.debit).chartdata}/>  
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    title="账户欠款"
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width: 260,
                                    }}
                                >
                                    <p>{lastcredittotal}</p>
                                    <p>{credittotal}</p>
                                    <p>{nextcredittotal}</p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    title={revenuetotal}
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width:260,
                                    }}
                                >
                                  <Piechartdata chartdata={getcategorTotal(this.props.waterbill,this.props.category.revenue).chartdata}/>  
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    title={paymenttotal}
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width: 260,
                                    }}
                                >
                                 <Piechartdata chartdata={getcategorTotal(this.props.waterbill,this.props.category.payment).chartdata}/>  
                                </Card>
                            </Col>
                        </Row>
                    </>
                </div>
            </div>

            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={16}><Waterbill waterbill={this.props.waterbill}  removeCharacter={this.props.removeCharacter}/> </Col>
                            <Col span={8}> <Formdata 
                            handleSubmit={this.props.handleSubmit} 
                            category={this.props.category}
                            cardservices={this.props.cardservices}
                             /> </Col>
                        </Row>
                    </>
                </div>
            </div>
        </div>

        );
    }
}
