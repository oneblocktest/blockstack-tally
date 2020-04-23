import React,{Component} from 'react';
import styles from './index.css';
import { Row, Col } from "antd";


export default class Setcategory extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={12}>  <Cardservices /></Col>
                            <Col span={12}>  <Category /></Col>
                        </Row>
                    </>
                </div>
            </div>

        );
    }
}
