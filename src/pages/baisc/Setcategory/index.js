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
        const fristdata= () =>{
            const frist=this.props.frist
            if(frist==="frist"){
                return "如果你是首次使用本应用，请在这儿设置你的账户信息与收入支出类别信息。如果你已我们用户请对照信息是否有误，或者出现数据加载不成功"
            }else{
                return ""
            }
        }
     
        return (
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={24}>{fristdata}</Col>
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
