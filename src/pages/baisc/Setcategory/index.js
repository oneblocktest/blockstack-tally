import React,{Component} from 'react';
import styles from './index.less';
import { Row, Col } from "antd";
import Cardservices from './Cardservices';
import Category from './Category';

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
