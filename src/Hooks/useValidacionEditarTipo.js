import {useState, useEffect} from 'react'

import Swal from 'sweetalert2'

const ValidarEditarTipo=(StateInicial,validar)=>
{



  //const[valores,guardarValores]=useState(StateInicial);
  const[errores,guardarErrores]=useState({});
  const[submit,guardarSubmit]=useState(false)


  
  
   useEffect(() => {
     if(submit)
     {
        const noErrores=Object.keys(errores).length===0
        console.log("no errores");

        
        if(noErrores)
        {
          Swal.fire("Exito","La edicion ha sido exitosa","success")

        }else
        {
          Swal.fire("Error","La edicion no se ha realizado","error")

        }
        guardarSubmit(false)
     }
    
   }, [errores])






  const handleSubmit=e=>
  {
            e.preventDefault()
           console.log('editando...');
            //console.log(StateInicial);
            //guardarValores(StateInicial)
          
            
           // validar los valores 

           const erroresValidacion =validar(StateInicial);
           guardarErrores(erroresValidacion);
           guardarSubmit(true)          



  }




  return {handleSubmit,errores};


}



export default ValidarEditarTipo;