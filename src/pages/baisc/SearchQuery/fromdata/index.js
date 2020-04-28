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


class Formdata extends Component {
  formRef = React.createRef();

  render() {
    
    const onFinish = values => {
      this.props.searchhanld(values.bill.item)
     // console.log(values);
      this.formRef.current.resetFields(); 
    };

    return (
      <Form {...layout} ref={this.formRef} name="nest-messages" onFinish={onFinish} >
        
       
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
       
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
           搜索项目
        </Button>
        </Form.Item>
      </Form>
    );
  }
};

export default Formdata