import React, { Fragment,useState,useEffect } from 'react'
import {TextInput} from 'react-materialize';

import useValidacion from '../../Hooks/useValidacionEditarTipo'
import validar from '../../Validacion/validarEditarTipo'

function EditarTipo()
{


    const [tipo,guardarTipo]=useState({});

    const actualizarState=e=>{

        guardarTipo(
            {
                ...tipo,[e.target.name]:e.target.value
            })
    }



    useEffect(() => {
       

        //consulta a la bd para para agregar el state
        var types=({
            
            tipo:'Sueño',color:'#b30fae'
        })

        guardarTipo(types)
    }, [])



    //const EditTipo=()=>



const {handleSubmit,errores}=useValidacion(tipo,validar)

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