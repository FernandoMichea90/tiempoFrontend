import React,{useEffect} from 'react'

import M from 'materialize-css'
import { Link } from 'react-router-dom';

import plus from '../iconos/pluswhite.png'
import lista from '../iconos/lista.png'
import settings from '../iconos/settings.png'
import login from '../iconos/login.png'
import '../estilos/botonflotante.css'
function BotonFlotante()
{

    useEffect(() => {

        var elems = document.querySelectorAll('.fixed-action-btn');
         M.FloatingActionButton.init(elems, {});
    }, [])

    return(

        <div class="fixed-action-btn">
       <Link  to="/intranet" class="btn-floating btn-large deep-purple"><i class="large material-icons">insert_chart</i></Link>
        <ul>
          <li>
          <Link to="/crear" class="btn-floating  red">
          <img className="btnFlotante" src={plus} alt=""></img>
        </Link>
          </li>
          <li>
            <Link  to="/listar" class="btn-floating  orange darken-1">
            <img className="btnFlotante" src={lista} alt=""></img>

              </Link></li>
          <li>
            <Link to="/tipo" class="btn-floating  green">
                <img className="btnFlotante" src={settings} alt=""></img>

              </Link>
              </li>
          <li>
            <Link to="/" class="btn-floating  blue">
              <img className="btnFlotante" src={login} alt=""></img>

            </Link>
          </li>
          
       
        </ul>
      </div>


    )

}
export default BotonFlotante