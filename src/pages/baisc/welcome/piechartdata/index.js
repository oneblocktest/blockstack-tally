
import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from "bizcharts";


  
const Piechartdata=()=> {
  
    return (
      <Chart
       width={ 240 }
        height={ 240 }
        data={[
          { name: 'Chrome', value: 24.03 },
          { name: 'Firefox', value: 10.38 },
          { name: 'Safari', value: 4.77 },
          { name: 'Opera', value: 0.91 },
          { name: 'Unknown', value: 0.2 },
        ]}
       // forceFit
        onIntervalClick={ev => {
          const data = ev.data;
          if (data) {
            const name = data._origin['name'];
            window.open('http://www.baidu.com/s?wd=' + name);
          }
        }}
      >
        <Coord type="theta" />
        <Tooltip showTitle={false} />
        <Geom
          type="intervalStack"
          position="value"
          color="name"
        >
          <Label content="name" />
        </Geom>
      </Chart>
    );
  }

      
  
  export default Piechartdata