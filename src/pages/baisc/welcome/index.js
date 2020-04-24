import React, { Component } from 'react';
import styles from './index.less';
import { Row, Col, Card } from "antd";
import Waterbill from "./waterbill";
import Formdata from "./fromdata";


export default class Welcome extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
           waterbill:props.waterbill
        }
    }

    render() {
        return (
        <div>
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={6}>
                                <Card
                                    title="本月余额"
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width: 260,
                                    }}
                                >
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
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
                                    <p>上月欠款：</p>
                                    <p>本月欠款：</p>
                                    <p>下月欠款：</p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    title="收入情况"
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width:260,
                                    }}
                                >
                                    <p>收入情况</p>
                                    <p>收入情况</p>
                                    <p>收入情况</p>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    title="支出情况"
                                    extra={<a href="#">More</a>}
                                    style={{
                                        width: 260,
                                    }}
                                >
                                    <p>收入情况</p>
                                    <p>收入情况</p>
                                    <p>收入情况</p>
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
                            <Col span={16}><Waterbill waterbill={this.state.waterbill}  /> </Col>
                            <Col span={8}> <Formdata handleSubmit={this.props.handleSubmit}/> </Col>
                        </Row>
                    </>
                </div>
            </div>
        </div>

        );
    }
}
