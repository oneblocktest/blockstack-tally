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
            <Popconfirm title="确定删除吗?" onConfirm={() => {props.removeCharacter(record.key)}}>
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ]
    
      
    
      const data = props.waterbill //变换dataSource数据格式
      const newsdata = []
      let j = 0
      for (let i = data.length - 1; i > -1; i--) {
        newsdata[j] = data[i]
        newsdata[j].key = j
        j++
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

export default Waterbill