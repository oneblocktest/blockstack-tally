import React from 'react';
//import styles from './index.css';
import { Table, Popconfirm } from 'antd';

/* const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
  
};
 */


const Waterbill =(props)=>{
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
      {
        title: 'operation',  //删除键
        dataIndex: 'operation',
        render: (text, record) =>
          newsdata.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => {props.removeCharacter(record.key)}}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ]
    
    //getdataSourc=(props)=>{   //变换dataSource数据格式
    console.log(props.waterbill)
      const data = props.waterbill
      const newsdata = []
      let j = 0
    
      for (let i = data.length - 1; i > -1; i--) {
        newsdata[j] = data[i]
        newsdata[j].key = j
        j++
      }
      //this.setState({count:newsdata.length})
      // this.setState({dataSource:newsdata})
   //   return newsdata
   // } 
    
      console.log(newsdata)
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


/* class Waterbill extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '日期',
        dataIndex: 'date',
        
      },
      {
        title: '项目',
        width: '30%',
        editable: true,
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
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          date: 'Edward King 0',
          item: '32',
          test: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          date: 'Edward King 0',
          item: '32',
          test: 'London, Park Lane no. 0',
        },
      ],
      count: 2,
      waterbill:props.waterbill
    };
  }
getdataSource = (props) =>{   //变换dataSource数据格式
    let data=props.waterbill
    let newsdata=[]
    let j=0
   
    for(let i=data.length-1;i>-1;i--){
        newsdata[j]=data[i]
        newsdata[j].key=j
        j++
    }
    //this.setState({count:newsdata.length})
   // this.setState({dataSource:newsdata})
    return newsdata
    }
  

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
       
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={getdataSource()}
          columns={getdataSource().length}
        />
      </div>
    );
  }
   componentWillMount() {
    this.getdataSource()
  }  


}
 */
export default Waterbill