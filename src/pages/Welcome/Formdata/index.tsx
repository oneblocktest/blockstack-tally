import React from "react";
import styles from "./index.less";
import { Input,Button  } from "antd";



export default () => (


  <div id="components-input-demo-basic">
    <label>日期:</label>
    <Input placeholder="date" />
    <label>项目:</label>
    <Input placeholder="update" />
    <label>类别:</label>
    <Input placeholder="update" />
    <label>金额:</label>
    <Input placeholder="balance" />
    <label>卡类:</label>
    <Input placeholder="balance" />
    <Button type="primary">提交</Button>
  </div>

);




