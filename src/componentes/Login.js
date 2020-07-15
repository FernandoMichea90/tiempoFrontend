import React,{useEffect} from 'react'
import M from 'materialize-css'
import '../estilos/login.css'
function Login(props) {

    const ingresar=()=>
    {

        props.history.push('/intranet')
    }

    useEffect(() => {
        M.updateTextFields();
    }, [])


    return(



        <div  className="container login">
            <form onSubmit={ingresar}>
            <div className="row rowClase">
                <div className="col s12 input-field ">
                
                 <input className="inputlogin" placeholder="Ingrese correo" id="first_name" type="text" class="validate"/>
                <label for="first_name">Usuario</label>
                </div>
                
                <div className="col s12 input-field inputlogin">
                
                 <input className="inputlogin" placeholder="Ingrese contraseña" id="first_name" type="text" class="validate"/>
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