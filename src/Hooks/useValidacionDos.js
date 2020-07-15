import {useState,useEffect}from 'react'
import Swal from 'sweetalert2'



function useValidacionDos(StateInicial,Validar,fn)
{

   
   // const [valores,setValores]=useState(StateInicial)
    const [errores,setErrores]=useState({});

    const [submit,guardarSubmit]=useState(false)



    useEffect(() => {


        if(submit){
      
            const noErrores=Object.keys(errores).length===0
            
            if(noErrores)
            {
                fn()
                Swal.fire(
                    'Exito',
                    'Registro Editado Correctamente',
                    'success'
                  )
            }
            else
            {
                Swal.fire(
                    'Error',
                    'No se Ha podido Editar el Registro',
                    'error'
                  )
                
            }
        }

        guardarSubmit(false)


    }, [errores])
    const handleSubmit=e=>{

        e.preventDefault();
        console.log("estoy haciendo Submit");

        console.log(StateInicial);
        //console.log(valores);
        
        
        const erroresDevalidacion=Validar(StateInicial);
        setErrores(erroresDevalidacion);
        guardarSubmit(true)
    }

   

return {handleSubmit,errores};

   

}

export default useValidacionDos;