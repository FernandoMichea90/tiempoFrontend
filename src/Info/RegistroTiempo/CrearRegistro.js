import React,{useState,useEffect, Fragment, useContext} from 'react'
import BotonFlotante from '../../componentes/BotonFlotante'
import BarraLateral from '../../componentes/BarraLateral'
import "react-datepicker/dist/react-datepicker.css";
import M from 'materialize-css'
import {Select} from 'react-materialize'
import useValidacion from '../../Hooks/useValidacion'

import validarCrearCuenta from '../../Validacion/validarCrearCuenta';
import clienteAxios from '../../config/axios'
import {CRMContext} from '../../context/CRMcontext'
function Registro(props)
{


        
    const [auth]=useContext(CRMContext);
    const [prueba,guardarprueba]=useState([])
    const startDate = useState(new Date());
    const endDate = useState(new Date());
    const registro=useState({
        inicio:'',
        fin:'',
        tipo:'',
        categoria:'',
        descripcion:''
    })

    const [tipos,guardarTipos]=useState([]);


    // Use Validacion 
    const { errores,handleSubmit,handleChange}=useValidacion(registro,validarCrearCuenta,crearCuenta);
    // funcion crear cuenta 

    function crearCuenta()
    {
        console.log("Crear Cuenta ");
        
    }

 


useEffect(() => {

    const cargarTipos=async()=>{
      
           
        try {
         const tiposConsulta=await clienteAxios.get(`/tipos/${auth.token}`)
         //guardarTipos(tiposConsulta.data);
         guardarprueba(tiposConsulta.data)
         console.log("termine bien");
         
        } catch (error) {
            console.log("paso por el errror");
            
            console.log(error);
            
        }
       
   


 }
   
     M.updateTextFields();

   

    cargarTipos();


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
            <input id="last_name" name="inicio" onChange={handleChange} type="datetime-local" class="validate"/>
            <label for="last_name" className="active">Inicio</label>
            </div>

            <div className="col s6  input-field" >
            <input id="last_name" name="fin" type="datetime-local" onChange={handleChange} class="validate"/>
            <label for="last_name" className="active">Fin</label>      
            </div>
            </div>
            

            <div className="row">
            

            <div className="col s12">
                
            <Select
                    onChange={handleChange}
                    name="tipo"
                    multiple={false}
                    value={registro.tipo}
                    options={{
                      classes: '',
                      dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                      }
                    }}
                >
                    <option value="">
                            Seleccione
                    </option>
                    
                    {prueba.map(tipIng=>(
                            <option value={tipIng._id}>
                                               {tipIng.tipo} 
                                            </option>

                        ))}
                </Select>
             



               
            </div>

            </div>
            <div className="row">   
            <div className="col s12">
                
                            
            <Select
                    onChange={handleChange}
                    name="categoria"
                    multiple={false}
                    value={registro.categoria}
                    options={{
                      classes: '',
                      dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                      }
                    }}
                >
                    <option value="">
                            Seleccione
                    </option>
                    
                    <option value="Urgente Importante">
                            Urgente Importante
                    </option>
                    <option value="Urgente No Importante">
                            Urgente No Importante 
                    </option>
                    <option value="No  Urgente Importante">
                            No  Urgente Importante 
                    </option>
                    <option value="No Urgente No Importante">
                            No Urgente No Importante
                    </option>
                    
                  
                </Select>
             

                       
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