import React,{Component} from 'react';
import styles from './index.less';
import { Row, Col } from "antd";
import Cardservices from './Cardservices';
import Category from './Category';

export default class Setcategory extends Component {
  /*   constructor(props) {
        super(props);
    
       
    } */

    render() {
     
        return (
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={12}>  <Cardservices cardservices={this.props.cardservices }
                                                
                                                sethandlecardchange={this.props.sethandlecardchange} 
                                                /></Col>
                            <Col span={12}>  <Category category={this.props.category} sethandlecatchange={this.props.sethandlecatchange}  /></Col>
                        </Row>
                    </>
                </div>
            </div>

        );
    }
}
