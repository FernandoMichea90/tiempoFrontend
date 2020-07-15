import React ,{useState,useEffect} from 'react'
import moment from 'moment'
function HoraCat(props)
{
  const [arreglo,guardarArreglo]=useState([])
  
  
  





  useEffect(() => {
   var arre;
    if(moment(props.fecha.fecha).format('LL')===moment(new Date()).format('LL'))
		{
       arre=[{tipo:'Urgente Importante',tiempo:'8:00'},{tipo:'Urgente No Importante',tiempo:'1:00'},{tipo:'No Urgente Importante',tiempo:'2:00'}]

		}else{
        arre=[{tipo:'Urgente Importante',tiempo:'3:00'},{tipo:'Urgente No Importante',tiempo:'4:00'},{tipo:'No Urgente Importante',tiempo:'5:00'}]

		}
    guardarArreglo(arre)

  }, [props.fecha])

return(
    <div className="col s12 m6 l4 columna">
        
        <table>
        <thead>
          <tr>
              <th>Clasificacion</th>
              <th>Tiempo</th>
          </tr>
        </thead>

        <tbody>

         {arreglo.map(a=>(
          <tr>
            <td>{a.tipo}</td>
            <td>{a.tiempo}</td>
          </tr>
         ))} 
        </tbody>
      </table>

    </div>

)

}

export default HoraCat