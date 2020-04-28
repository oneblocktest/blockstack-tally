import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
//import echarts from 'echarts/lib/echarts'



class Piechartdata extends Component {

getOption = () =>{
    const chartdata=this.props.chartdata
   // let coin=[];
    //let valuedata=[];
   
    /* if(testdata.length>0){
    for(let i=0;i<testdata.length;i++){
        let arr={
            name:testdata[i].coin,
            value:testdata[i].valuedata
        }
        coin.push(testdata[i].coin)

        valuedata.push(arr)
    }
}
console.log(JSON.stringify(coin));
console.log(JSON.stringify(valuedata)); */
let option = {
   /*  title : {
        text: '仓位',
        subtext: '图示',
        x:'center'
    }, */
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    /* legend: {
        orient: 'vertical',
        left: 'left',
        data:chartdata.namedata,
    }, */
    series : [
        {
            name: '分布',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: chartdata.valuedata,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
    return option;
}
render(){
    return (
      //  <div style={ {width:240, Height:240} }>
        <ReactEcharts option={this.getOption()}/>
     //   </div>
    )
}

}

export default Piechartdata;
