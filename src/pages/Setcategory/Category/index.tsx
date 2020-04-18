import React from "react";
import styles from "./index.less";
import { Input,Button  } from "antd";
import { Row, Col } from "antd";



const { TextArea } = Input;

export default  () => (
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
          <label>展示:</label>
          <TextArea rows={6} />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);




