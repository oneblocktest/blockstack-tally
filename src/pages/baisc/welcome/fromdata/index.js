import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, DatePicker,Select } from 'antd';
import moment from "moment"
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }
};

/* const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}; */

const getcategory = (props) => {
  const { category } = props;
  let gettype = []
  for (let x in category) {
    for (let y in category[x]) {
      gettype.push(category[x][y].name)
    }
  }
  return gettype
}
const getcardservices = (props) => {
  const { cardservices } = props;
  let gettype = []
  for (let x in cardservices) {
    for (let y in cardservices[x]) {
      gettype.push(cardservices[x][y].card)
    }
  }
  return gettype
}


class Formdata extends Component {
  formRef = React.createRef();
 // category = { this.props.category }
 // cardservices = { this.props.category }
 



  render() {



    const onFinish = values => {
      values.bill.date = moment(values.bill.date).format("YYYY-MM-DD")
      console.log(values);
      this.props.handleSubmit(values)
      this.formRef.current.resetFields();
    };

    return (
      <Form {...layout} ref={this.formRef} name="nest-messages" onFinish={onFinish} >
        <Form.Item
          name={['bill', 'date']}
          label="日期"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker format={'YYYY-MM-DD'} />
        </Form.Item>
        <Form.Item
          name={['bill', 'item']}
          label="项目"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['bill', 'type']}
          label="类别"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            showSearch
           // onChange={this.handleSecChange}
            // placeholder="请输入/选择xxx"   
           // onSearch={this.handleSerach}
          >
            {
              getcategory(this.props).length && getcategory(this.props).map((item, index) => (
                <Select.Option key={index} value={item}>{item}</Select.Option>)
              )
            }
          </Select>
        </Form.Item>
        <Form.Item name={['bill', 'amount']} label="金额" rules={[
          {
            required: true,
          },
        ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['bill', 'card']} label="账户" rules={[
          {
            required: true,
          },
        ]}
        >
          <Select
            showSearch
           // onChange={this.handleSecChange}
            // placeholder="请输入/选择xxx"   
           // onSearch={this.handleSerach}
          >
            {
              getcardservices(this.props).length && getcardservices(this.props).map((item, index) => (
                <Select.Option key={index} value={item}>{item}</Select.Option>)
              )
            }
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    );
  }
};

export default Formdata