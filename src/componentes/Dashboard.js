import React, {useState,useEffect, Fragment, useContext } from 'react'
import HoraTipo from '../Info/horaTipo/horaTipo'
import BarChart from '../Info/horaTipo/horaTipoGraf'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import HoraCat from '../Info/CatTipo/HoraCat'
import ColumnChart from '../Info/CatTipo/HoraCatGraf'
import '../estilos/dashboard.css'
import {CRMContext} from '../context/CRMcontext';
import clienteAxios from '../config/axios'
function Dashboard ()
{
    const [fecha,guardarFecha]=useState({
        fecha:new Date()})
// Guardar las listas de tipos 
   const [tipos,guardarTipos]=useState({});     
//Guardar las listas de categorias
   const [categorias,guardarCategorias]=useState({});   
//Guardar los datos de autenticacion 
  const [auth,guardarToken]=useContext(CRMContext)

      useEffect(() => {
         

        const consultarApi=async ()=>
        {
          const consultaTipo=await clienteAxios.post("/registrostipohora",{fecha,auth})
          const consultaCategoria=await clienteAxios.post("/registrostipocategoria",{fecha,auth})
          console.log(consultaTipo.data);
          guardarTipos(consultaTipo.data)
          console.log(consultaCategoria.data);
          guardarCategorias(consultaCategoria.data);
          
          
        }
        console.log("cambiando fecha");
        consultarApi();
        
      }, [fecha])  

    return (
        <Fragment>
        <div className="col l4 m12 s12 columna">
        <Calendar onChange={fecha =>guardarFecha({fecha})} value={fecha.fecha}></Calendar>
        </div>   

    <HoraTipo tipos={tipos}/>
    <HoraCat categorias={categorias}/>
       <BarChart tipos={tipos} />

      
       <ColumnChart  categorias={categorias}/>
       </Fragment>
    )

}

export default Dashboard;