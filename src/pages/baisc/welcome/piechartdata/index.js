import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
//import echarts from 'echarts/lib/echarts'



class Piechartdata extends Component {

getOption = () =>{
    const chartdata=this.props.chartdata

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
            radius : '90%',
            center: ['50%', '50%'],
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
