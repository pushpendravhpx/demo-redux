import React, { useEffect, useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official";
import { useSelector } from 'react-redux'

import {getAllCourses} from "./../../../redux/reducers/course.reducer"


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


let Visualizer = ()=>{

    let [chartState, setChartState] = useState({
        courseSelected : 'physics',
        marks:[0,0,0,0]
    })
    let stateValue = useSelector(getAllCourses);
    console.log(stateValue)

    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: chartState.courseSelected +' Chart'
        },
        series: [
          {
            data: chartState.marks
          }
        ]
      };
    
    useEffect(()=>{
        setChartState((prev)=>{
            let s = capitalizeFirstLetter(stateValue.courses.courseSelected);
            let marks = []
            let arr = stateValue.courses.courses[stateValue.courses.courseSelected];

            for(let i=0; i < arr.length; i++){
                marks.push(arr[i].marks)
            }
            console.log(marks)
            return {...prev, courseSelected:s , marks:marks}
        })
    }, [stateValue]);

  
    return <>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </>
}
export default Visualizer;