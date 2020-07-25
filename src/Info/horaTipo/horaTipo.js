import React,{useState,useEffect} from 'react'
import moment from 'moment'

function HoraTipo({tipos})
{
 

  const [arreglo,guardarArreglo]=useState([])
  
  





  useEffect(() => {
    

    var arre=[]

    /*
    if(moment(fecha.fecha).format('LL')===moment(new Date()).format('LL'))
		{
       arre=[{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]

		}else{
        arre=[{tipo:'sueño',tiempo:'8:00'},{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]

    }
    */
    if(tipos.length)
		{

      for(var i=0;i<tipos.length;i++)
        {
          console.log(tipos[i]._id[0].tipo);
          console.log(tipos[i].totalHoras);
          var prueba={
            tipo:tipos[i]._id[0].tipo,
            tiempo:tipos[i].totalHoras
          }
          //console.log(prueba);
          arre.push(prueba)
          
        }
      
        //arre=[{tipo:'sueño',tiempo:'8:00'},{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]


		}else{

      arre=[{tipo:'fitness',tiempo:'1:00'},{tipo:'Hotel',tiempo:'2:00'}]

      
    }
    


    guardarArreglo(arre)

  }, [tipos])



  


  
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