import React ,{Fragment,useEffect,useState}from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import BotonFlotante from '../../componentes/BotonFlotante'
import BarraLateral from '../../componentes/BarraLateral'
import editIcono from '../../iconos/editar.png'
import deleteIcono from '../../iconos/basurero.png'
import Swal from 'sweetalert2'
import moment from 'moment'

import { Link } from 'react-router-dom';



function ListarRegistro()
{
  const [fecha,guardarFecha]=useState({
    fecha:new Date()})

  const [cols,guardarRegistros]=useState([])

 const eliminarRegistro=()=>
 {
   console.log("eliminando Registro");

   Swal.fire (
    'Exito!','Registro Borrado','success'
   )
   
 }


 const verDescripcion=(descripcion)=>
 {
  Swal.fire({
    icon: 'info',
   
    text: descripcion
   
  })


 }


 

 


  useEffect(() => {
  

      // Variables para hacer una lista 

 let columna=[
  {
   inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Dormir' ,tipo:'Sueño',categoria:'urgente importante'
  },
  {
    inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Ejercicio' ,tipo:'Fitness',categoria:'urgente importante'
 },
 {
    inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Lectura' ,tipo:'Leer',categoria:'urgente importante'
},
 {
    inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Papeleo' ,tipo:'Hotel',categoria:'urgente importante'
 },
 {
   inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Baño' ,tipo:'Personal',categoria:'urgente importante'
 }
 ]

 let columnaDos=[
  {
   inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Dormir' ,tipo:'Sueño',categoria:'urgente importante'
  },
  {
    inicio:moment().format('LT'),fin:moment().format('LT'),descripcion:'Ejercicio' ,tipo:'Fitness',categoria:'urgente importante'
 }
 ]
       
        if(moment(fecha.fecha).format('LL')===moment(new Date()).format('LL'))
        {
         
          
          console.log("es igual ");
          
          guardarRegistros(columna)
        }else
        {
          console.log("es diferente");
          
          guardarRegistros(columnaDos)
        }


        // aca va la consulta 
       
       


  }, [fecha])

  
  

  
    return(

        <Fragment>

<BotonFlotante/>
        <BarraLateral/>
        <div className="container">
            <h1>

                 Registros de Tiempo 
            </h1>


        <div className="row">

        <Calendar onChange={fecha =>guardarFecha({fecha})} value={fecha.fecha}></Calendar>

        </div>

        <div className="row">
        <table>
        <thead>
          <tr>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Editar</th>
              <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>00:00</td>
            <td>08:00</td>
            <td>Sueño</td>
            <td>importante urgente</td>
            <td>
              icono
            </td>
            <td>
             <Link  to="/editar"> 
            <img src ={editIcono} height="25" width="25" alt=""/>
            </Link>
            </td>
           
            <td>
                <button onClick={()=>eliminarRegistro()} > 
                <img src ={deleteIcono} height="25" width="25" alt=""/>
                </button>

            </td>




          </tr>

          {cols.map(tiempo=>(
<tr>
<td>{tiempo.inicio}</td>
<td>{tiempo.fin}</td>
<td>{tiempo.tipo}</td>
<td>{tiempo.categoria}</td>
<td>
<button onClick={()=>verDescripcion(tiempo.descripcion)}>
Descripcion
</button>
</td>
<td>
<Link to="/editar">
<img src ={editIcono} height="25" width="25" alt=""/>
</Link>
</td>
<td>
<button onClick={()=>eliminarRegistro()} >
<img src ={deleteIcono} height="25" width="25" alt=""/>
</button>

</td>
</tr>
))}
        </tbody>
      </table>
       
        </div>
        </div>
        </Fragment>


    )
}

export default ListarRegistro