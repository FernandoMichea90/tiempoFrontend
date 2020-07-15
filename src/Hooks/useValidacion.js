import  { useState ,useEffect} from 'react'
import Swal from 'sweetalert2'



const useValidacion=(StateInicial,Stateinicio,StateFinal,validar,fn)=>
{
    const [valores,guardarValores]=useState(StateInicial);
    const [errores,guardarErrores]=useState({});
    const [SubmitForm,guardarSubmitForm]=useState(false);
    
useEffect(() => {
   
    if(SubmitForm)
    {
        const noErrores=Object.keys(errores).length===0

        if(noErrores)
        {
            fn();
        }else
        {
            Swal.fire(
                'Error',
                '',
                'error'
              )
        }
        guardarSubmitForm(false )
    }
}, [errores])

const handleChange=e=>
{
    guardarValores(
        {
            ...valores,[e.target.name]:e.target.value
        })
}

        // funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit=e=>
    {
        e.preventDefault();

        console.log("paso por el handle SUBMIT");
        valores.inicio=Stateinicio
        valores.fin=StateFinal
        const erroresValidacion=validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }
    return{
        valores,errores,SubmitForm,handleSubmit,handleChange
    }
}

export default useValidacion