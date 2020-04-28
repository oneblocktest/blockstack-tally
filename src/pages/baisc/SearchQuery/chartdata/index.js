import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import {getchartdata} from './model.js';
//import echarts from 'echarts/lib/echarts'


class Chartdata extends Component {

getOption = () =>{
const waterbill=this.props.waterbill
const chartdata=getchartdata(waterbill) 
//console.log(chartdata)

let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: [ 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['收入', '支出']
    },
    xAxis: [
        {
            type: 'category',
            data: chartdata.name,
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '状态',
            min: 0,
          //  max: 50000,
          //  interval: 500,
            axisLabel: {
                formatter: '{value} 元'
            }
        },
       
    ],
    series: [
        {
            name: '收入',
            type: 'bar',
            data: chartdata.revenue
        },
        {
            name: '支出',
            type: 'bar',
            data: chartdata.payment
        },
    ]
};


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

export default Chartdata;
