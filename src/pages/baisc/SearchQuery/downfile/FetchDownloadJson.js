import React, {Component} from 'react';
import{ Button} from 'antd'

class FetchDownloadJson extends Component {
    download = (content) => {
        let a = document.createElement('a');
       // let content_text=JSON.stringify(content,null,2)
        let url = window.URL.createObjectURL(new Blob([content], { type: "" }));
        let filename = 'fileDownload.json'; //提取文件名
        a.href = url;
        a.download = filename; //给下载下来的文件起个名字
        a.click();
        window.URL.revokeObjectURL(url);
        a = null;
    };

    render() {
        const { content } = this.props;
        return (
            <Button  type="primary"  onClick={this.download.bind(content)} > 下载JSON</Button>
        )
    }
}
export default FetchDownloadJson;