import  { useState ,useEffect, useContext} from 'react'
import Swal from 'sweetalert2'
import clienteAxios from '../config/axios'

import {CRMContext} from '../context/CRMcontext'
const useValidacion=(StateInicial,validar,fn)=>
{
    const[auth,guardarAuth]=useContext(CRMContext)
    const [valores,guardarValores]=useState(StateInicial);
    const [errores,guardarErrores]=useState({});
    const [SubmitForm,guardarSubmitForm]=useState(false);
    
useEffect(() => {
    var prueba =SubmitForm;
    if(prueba)
    {
        const noErrores=Object.keys(errores).length===0

        if(noErrores)
        {
            
              const Consulta =clienteAxios.post("/crearRegistro",{valores,auth})  
                console.log("Esta es la consulta SUPER");
                
              console.log(Consulta);
            

            Swal.fire(
                'Exito',
                'esto es una prueba ',
                'success'
              )
            console.log("Paso por  la  funcion");

            // mandar  la consulta a la base de datos 
            
            
           
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

        //console.log("paso por el handle SUBMIT");
        
        
       // valores.inicio=Stateinicio
        //valores.fin=StateFinal
       
       var fechaInicio=new Date(valores.inicio).getTime();
       var fechaFinal=new Date(valores.fin).getTime();
    
      
      var diferencia=(fechaFinal-fechaInicio)/(1000*60*60);
      console.log(diferencia);


        valores.hora=diferencia;
        console.log("Estos son lo valores con la diferencia de hora ");
        console.log(valores);
        
        
        const erroresValidacion=validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }
    return{
        valores,errores,SubmitForm,handleSubmit,handleChange
    }
}

export default useValidacion