import React,{useState,useEffect, Fragment} from 'react'
import BotonFlotante from '../../componentes/BotonFlotante'
import BarraLateral from '../../componentes/BarraLateral'
import "react-datepicker/dist/react-datepicker.css";
import M from 'materialize-css'

import useValidacion from '../../Hooks/useValidacion'

import validarCrearCuenta from '../../Validacion/validarCrearCuenta';

function Registro()
{


      

    const startDate = useState(new Date());
    const endDate = useState(new Date());
    const registro=useState({
        inicio:'',
        fin:'',
        tipo:'',
        categoria:'',
        descripcion:''
    })



    // Use Validacion 
    const { errores,handleSubmit,handleChange}=useValidacion(registro,startDate,endDate,validarCrearCuenta,crearCuenta);
    // funcion crear cuenta 

    function crearCuenta()
    {
        console.log("Crear Cuenta ");
        
    }

 


useEffect(() => {
    var elems = document.querySelectorAll('select');
     M.FormSelect.init(elems,{});
     M.updateTextFields();
}, [])
 

    return(
        <Fragment>
        <BotonFlotante/>
        <BarraLateral/>

        <div className="container">

            <form onSubmit={handleSubmit}>
            <h1>
                Crear Registro Tiempo
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
            

            <div className="row">
            

            <div className="col s12">
                
                <div class="input-field col s12">
                        <select onChange={handleChange} name="tipo">
                        <option value="" disabled selected>Seleccione</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                    <label>Tipo</label>
                </div>

            <div className="col s12">
                 {errores.tipo && <p>{errores.tipo}</p>}
            </div>
                       
            </div>

            </div>
            <div className="row">   
            <div className="col s12">
                
                <div class="input-field col s12">
                        <select onChange={handleChange} name="categoria">
                        <option value="" disabled selected>Seleccione</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                    <label>Clasificacion</label>
                </div>
                       
            </div>
            </div>

            <div className="row">
                <div class="input-field col s12">
            <textarea id="textarea2" name="descripcion" onChange={handleChange} class="materialize-textarea" data-length="120"></textarea>
            <label for="textarea2">Comentario</label>
          </div>
        </div>


        <button class="btn waves-effect waves-light" type="submit" name="action">Guardar
            <i class="material-icons right">send</i>
        </button>

        </form>
            </div>


         


       
        </Fragment>
    )

}
export default Registro;