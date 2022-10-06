import React from "react";

import ChartBar from "./ChartBar";
import "./chart.css"

const Chart = props =>
{
 
  const dataPointsValues =props.datapoints.map(
    (d ) =>
   d.value);
  const totalMaximun =Math.max(...dataPointsValues);
return(

  <div className="chart">
   

    {

      props.datapoints.map(d =>
        <ChartBar
        key ={d.label}    
        value ={d.value}
        maxValue={totalMaximun}
        label={d.label}
        />
        )
    }


  </div>
)


};

export default Chart;