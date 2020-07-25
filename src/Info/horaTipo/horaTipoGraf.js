import React, {  useEffect,useState } from 'react';
import CanvasJSReact from '../../canvasjs-2.3.2/canvasjs.react';
import moment from 'moment'
 
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

function BarChart ({tipos}) {
	

	
	 
	 const [dataPoints,guardar]=useState([]);

	 let dataPointsuno=[
		{ y:  2200000000, label: "Facebook" },
		{ y:  1800000000, label: "YouTube" },
		{ y:  800000000, label: "Instagram" },
		{ y:  563000000, label: "Qzone" },
		{ y:  376000000, label: "Weibo" },
		{ y:  336000000, label: "Twitter" },
		{ y:  330000000, label: "Reddit" }
	]
	let dataPointsdos=
	[
		{ y:  2200000000, label: "Facebook" },
		{ y:  1800000000, label: "YouTube" },
		{ y:  800000000, label: "Instagram" },
		{ y:  563000000, label: "Qzone" },
		{ y:  800000000, label: "Weibo" },
		{ y:  1800000000, label: "Twitter" },
		{ y:  2200000000, label: "Reddit" }
	]

	
		
	
	useEffect(() => {

			var arre=[];


		if(tipos.length)
		{

      for(var i=0;i<tipos.length;i++)
        {
          console.log(tipos[i]._id[0].tipo);
          console.log(tipos[i].totalHoras);
          var prueba={
            label:tipos[i]._id[0].tipo,
            y:tipos[i].totalHoras
          }
          //console.log(prueba);
          arre.push(prueba)
          
        }
		guardar(arre)
        //arre=[{tipo:'sueño',tiempo:'8:00'},{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]


		}else{

			guardar(arre);

		
    }
		
		
		
	
	}, [tipos])
	


    
   
	const addSymbols=(e)=>{
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	
	const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Tiempo"
			},
			axisX: {
				title: "Tipo",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				labelFormatter: addSymbols
			},
			data: [{
				type: "bar",
				dataPoints:dataPoints
			}]
		}
		
		return (
		<div className="col s12 columna">
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}

export default BarChart;