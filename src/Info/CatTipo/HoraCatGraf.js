import React, { useState,useEffect } from 'react';
import CanvasJSReact from '../../canvasjs-2.3.2/canvasjs.react';
import moment from 'moment'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function ColumnChart ({categorias}) {
	
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
				text: "Categoria Tiempo"
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
			var arre=[]
	
			if(categorias.length)
			{
	
		  for(var i=0;i<categorias.length;i++)
			{
			  console.log(categorias[i]._id);
			  console.log(categorias[i].totalHoras);
			  var prueba={
				label:categorias[i]._id,
				y:categorias[i].totalHoras
			  }
			  //console.log(prueba);
			  arre.push(prueba)
			  
			}
			guardarPuntos(arre)
		  
			//arre=[{tipo:'sueño',tiempo:'8:00'},{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]
	
	
			}else{
	
		  //arre=[{tipo:'Urgente Importante',tiempo:'3:00'},{tipo:'Urgente No Importante',tiempo:'4:00'},{tipo:'No Urgente Importante',tiempo:'5:00'}]
		  guardarPuntos(arre)
		  
		}
		
		}, [categorias])


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