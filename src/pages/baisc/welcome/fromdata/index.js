import React, {Component} from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
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





class Formdata extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      date: "",
      item: "",
      type: "",
      amount: "",
      card: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  onFormSubmit() {
   // event.preventDefault();
  //  this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}

  

  render() {

    return (
      <Form {...layout} name="nest-messages"  >
        <Form.Item
          name={['bill', 'date']}
          label="日期"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
          name={['bill', 'tpye']}
          label="类别"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['bill', 'aoumte']} label="金额">
          <Input />
        </Form.Item>
        <Form.Item name={['bill', 'introduction']} label="账户">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" >
            Submit
        </Button>
        </Form.Item>
      </Form>
    );
  }
};

export default Formdata