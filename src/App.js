import React, { Fragment } from 'react';

import Navbar from './componentes/Navbar'
import Login from './componentes/Login'
import Intranet from './componentes/Intranet'

import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css'
import Registro from './Info/RegistroTiempo/CrearRegistro';
import Editar from './Info/RegistroTiempo/EditarRegistro';
import ListarRegistro from './Info/RegistroTiempo/ListarRegistro';
import TipoPrincipal from './Info/Tipo/TipoPrincipal';
import EditarTipo from './Info/Tipo/EditarTipo';

function App() {
  return (

    <Router>
    <Fragment>
    <Navbar/>

    <Switch>

    <Route exact path="/" component={Login} />
    <Route exact path="/intranet" component={Intranet} />
    <Route exact path="/crear" component={Registro} />
    <Route exact path="/editar" component={Editar} />
    <Route exact path="/listar" component={ListarRegistro} />
    <Route exact path="/tipo" component={TipoPrincipal} />
    <Route exact path="/editartipo" component={EditarTipo} />


    <Login/>

    </Switch>
    </Fragment>
    </Router>
  );
}

export default  App;
