import React, {useState,useEffect, Fragment } from 'react'
import HoraTipo from '../Info/horaTipo/horaTipo'
import BarChart from '../Info/horaTipo/horaTipoGraf'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import HoraCat from '../Info/CatTipo/HoraCat'
import ColumnChart from '../Info/CatTipo/HoraCatGraf'
import '../estilos/dashboard.css'

function Dashboard ()
{
    const [fecha,guardarFecha]=useState({
        fecha:new Date()})

    

      useEffect(() => {
         
        console.log("cambiando fecha");
        
        
      }, [fecha])  

    return (
        <Fragment>
        <div className="col l4 m12 s12 columna">
        <Calendar onChange={fecha =>guardarFecha({fecha})} value={fecha.fecha}></Calendar>
        </div>   

    <HoraTipo fecha={fecha}/>
    <HoraCat fecha={fecha}/>
       <BarChart fecha={fecha} />

      
       <ColumnChart  fecha={fecha}/>
       </Fragment>
    )

}

export default Dashboard;