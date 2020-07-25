import React,{useEffect,useState,useContext,} from 'react'
import M from 'materialize-css'
import '../estilos/login.css'
import clienteAxios from '../config/axios'
import {CRMContext} from '../../src/context/CRMcontext'
import Swal from 'sweetalert2'
function Login(props) {

        const [credenciales,guardarCredenciales]=useState({});
        const [auth,guardarAuth]=useContext(CRMContext);


     const actualizarState=(e)=>
     {
         guardarCredenciales(
             {
                 ...credenciales,[e.target.name]:e.target.value
             })
     }



    const ingresar=async (e)=>
    {
        e.preventDefault();
        try{

        const respuesta =await clienteAxios.post('/login',credenciales)
        var {token}=respuesta.data;
        guardarAuth({
            token,auth:true
          })

          Swal.fire(
            'Login Correcto','Has Iniciado Sesion','success'

        )

        props.history.push('/intranet')
        }catch(error)
        {
            console.log(error);
            Swal.fire(
                {
                    icon:'error',title:'hubo un error',text:error
  
                })

        }
    }

    useEffect(() => {
        M.updateTextFields();
    }, [])


    return(



        <div  className="container login">
            <form onSubmit={ingresar}>
            <div className="row rowClase">
                <div className="col s12 input-field ">
                
                 <input  onChange={actualizarState} name="correo" className="inputlogin" placeholder="Ingrese correo" id="first_name" type="text" class="validate"/>
                <label for="first_name">Usuario</label>
                </div>
                
                <div className="col s12 input-field inputlogin">
                
                 <input  onChange={actualizarState} name="password" className="inputlogin" placeholder="Ingrese contraseña" id="first_name" type="text" class="validate"/>
                <label for="first_name">Contraseña</label>
                </div>
               
                <div className="col s12">
                
                <button type="submit" class="waves-effect waves-light btn boton">Ingresar</button>

                </div>


            </div>
            </form>
        </div>

    )

    
}
export default Login