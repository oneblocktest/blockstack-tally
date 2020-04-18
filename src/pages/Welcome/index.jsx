import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Row, Col } from 'antd';
import styles from './index.less';
import Waterbill from './Waterbill';
import Formdata from './Formdata';


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
            <Col span={6}>
              <Card
                title="本月余额"
                extra={<a href="#">More</a>}
                style={{
                  width: 300,
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
                  width: 300,
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
                  width: 300,
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
                  width: 300,
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
            <Col span={16}>   </Col>
            <Col span={8}> <Formdata /></Col>
          </Row>
        </>
      </div>
    </div>
  </PageHeaderWrapper>
);
