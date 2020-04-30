import React from "react";
import styles from "./index.less";
import { Input,Button,Form  } from "antd";
import { Row, Col } from "antd";



const { TextArea } = Input;



const Category=(props) =>{ 
  const category=props.category
  let category_text=JSON.stringify(category,null, 2)
 // console.log(category_text)

  const onFinish = values => {
  let  data=JSON.parse(values.category)
    props.sethandlecatchange(data)
    //console.log(data);
  };
  
  return (
  <div className={styles.container}>
    <div id="components-grid-demo-basic">
      <Row>
        <Col span={12}>
          <div id="components-input-demo-basic">
          <label>类别设置:</label>
              <p>设置内容以JSON格式：</p>
              <p>例子:</p>
              <p> "revenue": //代表支持类别</p>
              <p> "payment": //带收入项目</p>
              <p> "name": //具体项目名称</p>
              
          </div>
        </Col>
        <Col span={12}>
          <div>
          <Form  onFinish={onFinish}  initialValues={{category:category_text}} >
            <Form.Item name={['category']} label={"类别展示"} >
          <TextArea rows={18}  />
          </Form.Item>
         
            <Button type="primary" htmlType="submit" >提交</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

}

export default  Category

