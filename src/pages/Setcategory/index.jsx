import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert,Button } from 'antd';
import styles from './index.less';
import { Row, Col } from "antd";
import Cardservices from './Cardservices';
import Category from './Category';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <PageHeaderWrapper>
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
  <Button type="primary" >保存</Button>
  </PageHeaderWrapper>
);
