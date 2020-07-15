import { useState,useEffect } from 'react'
import Swal from 'sweetalert2'



const  useValidacionEditar=(StateInicial,validar,fn)=>
{
    console.log("...dentro");
    
const [valores,guardarValores]=useState(StateInicial)
const [errores,guardarErrores]=useState({})
const [submitForm,guardarSubmit]=useState(false)

useEffect(() => {
  
    if(submitForm)
    {

        const validarError =Object.keys(errores).length===0

        if(validarError)
        {

            Swal.fire('Exito','El registro ha sido ingresado','success')

        }else
        {
            Swal.fire('Error','El registro no ha sido guradador','error')
        }
        guardarSubmit(false)
    }


   




}, [errores])



const handleSubmit=e=>{


    

    console.log("...creando");

    e.preventDefault();
    const erroresdeValidacion=validar(valores);
    guardarErrores(erroresdeValidacion);    
    guardarSubmit(true)

}

const handleChange=e=>{

    console.log("paso por aca");
    
    guardarValores({

        ...valores,[e.target.name]:e.target.value
    })

}

return {handleChange,handleSubmit,errores}

}

export default useValidacionEditar;