import React, { useState,useEffect } from 'react';
import CanvasJSReact from '../../canvasjs-2.3.2/canvasjs.react';
import moment from 'moment'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function ColumnChart (props) {
	
		//constante de los puntos a interceder 

		const[puntos,guardarPuntos]=useState([]);


		// parte prueba 
			// puntos de interseccion ejemplo 
				let  puntosUno=[
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
				let  puntosDos=[
					{ label: "Manzana",  y: 4  },
					{ label: "Naranja", y: 20  },
					{ label: "Platano", y: 60  },
					{ label: "Mango",  y: 12  },
					{ label: "Uva",  y: 22 }
				]

		const options = {
			title: {
				text: "Basic Column Chart"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: puntos
			}
			]
		}
		
		useEffect(() => {

		if(moment(props.fecha.fecha).format('LL')===moment(new Date()).format('LL'))
		{
			guardarPuntos(puntosUno)
		}else{
			guardarPuntos(puntosDos)
		}
		
		}, [props.fecha])


		return (
		<div className="col s12 columna">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}

export default ColumnChart;