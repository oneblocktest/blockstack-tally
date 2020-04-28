import React from 'react';
//import styles from './index.css';
import { Table} from 'antd';




const Tabledata =(props)=>{
  //console.log(props)
  const columns = [
      {
        title: '日期',
        dataIndex: 'date',
        
      },
      {
        title: '项目',
        width: '30%',
        //editable: true,
        dataIndex: 'item',
      },
      {
        title: '类型',
        dataIndex: 'type',
      },
      {
        title: '金额',
        dataIndex: 'amount',
      },
      {
        title: '账户',
        dataIndex: 'card',
      },
    ]
   // console.log(props.waterbill)
   // const newsdata =[]
     // let data=[]
      const data = props.waterbill //变换dataSource数据格式
      const newsdata =[]
      let j = 0
     if(data.length>0){
      for (let i = data.length - 1; i > -1; i--) {
        newsdata[j] = data[i]
        newsdata[j].key = j
        j++
      }
    }
    return (
      <div>  
       <Table
          columns={columns}
          dataSource={newsdata}
          count={newsdata.length}
        />
      </div>
    );
  
  
}

export default Tabledata