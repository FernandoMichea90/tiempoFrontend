import React,{useState,useEffect, Fragment} from 'react'
import BotonFlotante from '../../componentes/BotonFlotante'
import BarraLateral from '../../componentes/BarraLateral'
import "react-datepicker/dist/react-datepicker.css";
import M from 'materialize-css'
import useValidacionDos from '../../Hooks/useValidacionDos';
import validareditarregistro from '../../Validacion/validarEditarRegistro';
import '../../estilos/editarRegistros.css'

function Editar()
{

    
        const [registro,GuardarRegistro]=useState({})
        //Obtener Registro de la base de datos 
        const obtenerRegistro=async()=>
        {

        var  registro={
                inicio:'',
                fin:'',
                tipo:2,
                categoria:3,
                descripcion:'esto es una Descripcion'

                }

            
            GuardarRegistro(registro)    
        }

        useEffect(() => {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems,{});

            console.log("1");
            

            obtenerRegistro();
            

        }, [])
        

        const actualizarState=e=>{

            GuardarRegistro(
                {
                    ...registro,[e.target.name]:e.target.value
    
                })
        }
    


        const editarRegistro=()=>
        {
            console.log("esta editando...");
            
        }
         const {handleSubmit,errores} =useValidacionDos(registro,validareditarregistro,editarRegistro);   

      


    return(
        <Fragment>
        <BotonFlotante/>
        <BarraLateral/>

        <div className="container">

          <form onSubmit={handleSubmit}>  
            <h1>
                 Editar Tiempo
            </h1>
            <div className="row">
            <div className="col s6 input-field">
            <input id="last_name" type="datetime-local" class="validate"/>
            <label for="last_name" className="active">Inicio</label>
            </div>

            <div className="col s6  input-field" >
            <input id="last_name" type="datetime-local" class="validate"/>
            <label for="last_name" className="active">Fin</label>      
            </div>
            </div>


            <div className="col s12">
                {errores.inicio && <p>{errores.inicio}</p>}
                {errores.fin && <p>{errores.fin}</p>}

            </div>
            
            

            <div className="row">
            <div className="col s6">
                
                <div class="input-field col s12">
                        <select name ="tipo" value={registro.tipo} onChange={actualizarState}>
                        <option value="" >Seleccione</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                    <label>Tipo</label>
                </div>
                       
            </div>
            <div className="col s12">
                {errores.tipo && <p>{errores.tipo}</p>}

            </div>
            </div>
            <div className="row">
           
            <div className="col s6">
                
                <div class="input-field col s12">
                        <select name="categoria" value={registro.categoria} onChange={actualizarState} >
                        <option value="" >Seleccione Categoria</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                    <label>Categoria</label>
                </div>
                       
            </div>
            <div className="col s12">
                {errores.categoria && <p>{errores.categoria}</p>}

            </div>
            </div>

            <div className="row">
              
                <div class="col s12 input-field ">
            <textarea id="textarea" value={registro.descripcion} onChange={actualizarState} name="descripcion"  class="materialize-textarea" data-length="120"></textarea>
            <label  className="Activo" for="textarea">Comentario</label>
          </div> 
          <div className="col s12">
                {errores.descripcion && <p>{errores.descripcion}</p>}

            </div>
        </div>


        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>
        </form>

            </div>


           

       
        </Fragment>
    )

}
export default Editar;