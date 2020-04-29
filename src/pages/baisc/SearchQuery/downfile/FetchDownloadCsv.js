import React, { Component } from 'react';
import{ Button} from 'antd'

class FetchDownloadCsv extends Component {
    download = (content) => {
        let output = "日期, 项目, 类型, 金额, 账户\n"
        for (let i = 0; i < content.length; i++) {
            output += content[i].date + ","
            output += content[i].item + ","
            output += content[i].type + ","
            output += content[i].amount + ","
            output += content[i].card + "\n"
        }

        let a = document.createElement('a');
        let url = window.URL.createObjectURL(new Blob([output], { type: "" }));
        let filename = 'fileDownload.csv'; //提取文件名
        a.href = url;
        a.download = filename; //给下载下来的文件起个名字
        a.click();
        window.URL.revokeObjectURL(url);
        a = null;
    };

    render() {
        const { content } = this.props;
        return (
            <Button  type="primary"  onClick={()=>this.download(content)} > 下载csv</Button>
        )
    }
}
export default FetchDownloadCsv;   