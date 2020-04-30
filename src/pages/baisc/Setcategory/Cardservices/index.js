import React from "react";
import styles from "./index.less";
import { Input, Button, Form } from "antd";
import { Row, Col } from "antd";

const { TextArea } = Input;

const Cardservices = (props) => {
  const cardservices = props.cardservices
  let cardservices_text = JSON.stringify(cardservices, null, 2)
  //console.log(cardservices_text)

  const onFinish = values => {
    let data = JSON.parse(values.cardservices)
    props.sethandlecardchange(data)
    //  console.log(data);
  };

  return (
    <div className={styles.container}>
      <div id="components-grid-demo-basic">
        <>
          <Row>
            <Col span={12}>
              <div id="components-input-demo-basic">

                <label>账户设置:</label>
                <p>设置内容以JSON格式：</p>
                <p>例子:</p>
                <p> "credit": //贷记账户，主要用于信用卡等信用账户</p>
                <p> "debit"": //主要用于存款账户以及现金</p>
                <p> "card": //具体账户名称</p>
                <p> "updata": //账单日期一般信用卡类账户结算日期</p>
                <p> "balance": //存款资金</p>

              </div>
            </Col>
            <Col span={12}>
              <div>
                <Form onFinish={onFinish} initialValues={{ cardservices: cardservices_text }} >
                  <Form.Item name={['cardservices']} label={"账户展示"} >
                    <TextArea rows={18} />
                  </Form.Item>

                  <Button type="primary" htmlType="submit" >提交</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </>
      </div>
    </div>
  );
}

export default Cardservices





