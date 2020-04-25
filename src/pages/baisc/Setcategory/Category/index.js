import React from "react";
import styles from "./index.less";
import { Input,Button  } from "antd";
import { Row, Col } from "antd";



const { TextArea } = Input;

const Category=(props) =>{ 
  const category=props.category
  let category_text=JSON.stringify(category,null, 2)
  console.log(category_text)
  
  return (
  <div className={styles.container}>
    <div id="components-grid-demo-basic">
      <Row>
        <Col span={12}>
          <div id="components-input-demo-basic">
            <label>收支支出设置:</label>
            <Input placeholder="payment" />
            <label>类别名称:</label>
            <Input placeholder="update" />
            <Button type="primary">提交</Button>
          </div>
        </Col>
        <Col span={12}>
          <div>
          <label>类别展示展示:</label>
          <TextArea rows={18} defaultValue={category_text} />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

}

export default  Category

