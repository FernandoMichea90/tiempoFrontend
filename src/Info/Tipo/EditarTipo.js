import React, { Fragment,useState,useEffect } from 'react'
import {TextInput} from 'react-materialize';

import useValidacion from '../../Hooks/useValidacionEditarTipo'
import validar from '../../Validacion/validarEditarTipo'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2';
function EditarTipo(props)
{
    
    //Obtengo el id del tipo a editar
    const {id}=props.match.params;


    const [tipo,guardarTipo]=useState({});

    const actualizarState=e=>{

        guardarTipo(
            {
                ...tipo,[e.target.name]:e.target.value
            })
    }



    const EditarTipoFuncion=()=>
    {
        //e.preventDefault();
        console.log("eDitando Funcion ....");
        console.log(tipo);
       
        clienteAxios.put(`/actualizartipo/${tipo._id}`,tipo)
        .then(res => {
            // validar si hay errores de mongo 
            if(res.data.code === 11000) {
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: 'No se pudo actualizar el registro'
                })
            } else {
                Swal.fire(
                    'Correcto',
                    'Se actualizó Correctamente',
                    'success'
                )
            }

            // redireccionar
            props.history.push('/tipo');
        })


        

        

    }



    useEffect(() => {

        console.log("paso por aca"+id);
        
       

        //consulta a la bd para para agregar el state


        const retornarRegistro=async()=>
        {
           
                const consulta =await clienteAxios.get(`/mostrartipo/${id}`);
              //  console.log(consulta);
                guardarTipo(consulta.data)




             

        }
        retornarRegistro();
        
        var types=({
            
            tipo:'Sueño',color:'#b30fae'
        })

        guardarTipo(types)
    }, [])



    //const EditTipo=()=>



const {handleSubmit,errores}=useValidacion(tipo,validar,EditarTipoFuncion)

return(

    <Fragment>
    <div className="container">    

    <form onSubmit={handleSubmit}>
    <div className="row">

    <h1>
        Editar tipo tiempo
    </h1>

</div>

<div className="row">

    <TextInput
        id="TextInput-4"
        label="Tipo"
        name="tipo"
        value={tipo.tipo}
        onChange={actualizarState}
    />

    <div className="col s12">
    {errores.tipo && <p>{errores.tipo}</p>}
    </div>
</div>


<div className="row">
<input 
                    type="color"
                    name="color"
                    id="TextInput-4"
                    label="Color"
                    value={tipo.color}
                    onChange={actualizarState}
                />

<div className="col s12">
    {errores.color && <p>{errores.color}</p>}
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


export default EditarTipo