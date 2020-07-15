import React,{ Fragment} from 'react'
import Dashboard from '../componentes/Dashboard'
import BotonFlotante from './BotonFlotante'
import BarraLateral from './BarraLateral'
import { withRouter } from "react-router";

function Intranet()
{



    return(
        <Fragment>
        <BotonFlotante/>
        <BarraLateral/>

        <div className="container">

            <div className="row">
                <Dashboard />



            </div>

        </div>

       
        </Fragment>
    )

}
export default withRouter(Intranet);