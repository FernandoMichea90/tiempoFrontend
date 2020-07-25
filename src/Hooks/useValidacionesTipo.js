import { useState,useEffect,useContext } from 'react'
import Swal from 'sweetalert2'
import clienteAxios from '../config/axios'
import {CRMContext} from '../context/CRMcontext'

const  useValidacionEditar=(StateInicial,validar,fn)=>
{
const [auth,guardarAuth]=useContext(CRMContext);   
const [valores,guardarValores]=useState(StateInicial)
const [errores,guardarErrores]=useState({})
const [submitForm,guardarSubmit]=useState(false)

useEffect(() => {
  

    console.log("muestrame el auth");
    console.log(auth);
    




    if(submitForm)
    {

        const validarError =Object.keys(errores).length===0

        if(validarError)
        {
            clienteAxios.post('/creartipo',{valores,auth}).then(res=>{

                    if(res.data.code===11000)
                    {
                        Swal.fire('Exito','El registro ha sido ingresado','success')
                    }



            })

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