import React,{useState,useEffect} from 'react'
import moment from 'moment'

function HoraTipo({fecha})
{
 

  const [arreglo,guardarArreglo]=useState([])
  
  





  useEffect(() => {
    

    var arre=""
    if(moment(fecha.fecha).format('LL')===moment(new Date()).format('LL'))
		{
       arre=[{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]

		}else{
        arre=[{tipo:'sueño',tiempo:'8:00'},{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]

		}
    guardarArreglo(arre)

  }, [fecha.fecha])



  


  
return(
    <div className="col s12 m6 l4 columna">
        
        <table>
        <thead>
          <tr>
              <th>Tipo</th>
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

export default HoraTipo