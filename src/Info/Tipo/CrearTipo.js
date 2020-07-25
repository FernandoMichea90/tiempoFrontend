import React, { Fragment, useState } from 'react'
import {TextInput} from 'react-materialize';
import BotonFlotante from '../../componentes/BotonFlotante'
import BarraLateral from '../../componentes/BarraLateral'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'

import useValidacion from '../../Hooks/useValidacionesTipo'
import validar from '../../Validacion/validarCrearTipo';
function CrearTipo(props)
{


    const tipo=useState({})







const GuardarTipo=e=>
{
    e.preventDefault()
    
   //clienteAxios.post('/creartipo',)

    Swal.fire(
        'Exito','Se ha guardado el registro','success'

    )


    



}


const {handleChange,handleSubmit,errores}=useValidacion(tipo,validar,GuardarTipo);


return(

    <Fragment>
        <BotonFlotante/>
        <BarraLateral/>


        <div className="container">

        <form onSubmit={handleSubmit} >
            <div className="row">

                <h1>
                    Registros tipo Tiempo
                </h1>

            </div>

            <div className="row">

                <TextInput
                    name="tipo"
                    id="TextInput-4"
                    label="Tipo"
                    onChange={handleChange}
                />
            
            <div className="col s12">
                {errores.tipo && <p>{errores.tipo}</p> }

            </div>

            </div>


            <div className="row">
            <input 
                    type="color"
                    name="color"
                    id="TextInput-4"
                    label="Color"
                    onChange={handleChange}
                />

                <div className="col s12">
                {errores.color && <p>{errores.color}</p> }

            </div>
            </div>

            <div className="row">
            <button class="btn waves-effect waves-light" type="submit" name="action">Nuevo
                <i class="material-icons right">send</i>
                </button>
            </div>
            </form>
            </div>

</Fragment>

)

}


export default CrearTipo