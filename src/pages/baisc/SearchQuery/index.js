import React,{Component} from 'react';
import styles from './index.css';
import { Row, Col,Card } from "antd";
import Fromdata from "./fromdata";
import Tabledata from "./tabledata";
import Chartdata from "./chartdata";



export default class Setcategory extends Component {
     constructor(props) {
        super(props)
        this.state={
            waterbill:props.waterbill
        }
    }  

    render() {
        return (
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Chartdata />
                            
                        </Row>
                    </>
                </div>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={18}> <Tabledata weterbill={this.state.waterbill}/> </Col>
                            <Col span={6}> <Fromdata /> </Col>
                            
                        </Row>
                    </>
                </div>
            </div>

        );
    }
}
