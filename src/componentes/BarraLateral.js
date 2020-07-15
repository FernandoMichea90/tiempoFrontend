import React,{useEffect, Fragment} from 'react'
 import M from 'materialize-css'

function BarraLateral()
{

useEffect(() => {
  var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
}, [])


return (

  <Fragment>
<ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="https://placeimg.com/640/480/tech" alt=""/>
      </div>
      <a href="#user"><img class="circle" src="https://placeimg.com/640/480/tech" alt=""/></a>
      <a href="#name"><span class="white-text name">Fernando Michea</span></a>
      <a href="#email"><span class="white-text email">fmicheam@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">assessment</i>Menu </a></li>
    <li><a href="#!"><i class="material-icons">list</i>Registo tiempo </a></li>
    <li><a href="#!"><i class="material-icons">settings</i>Tipo de tiempo</a></li>
    <li><a href="#!"><i class="material-icons">exit_to_app</i>Salir</a></li>
 

  </ul>
    </Fragment>
)

}

export default BarraLateral;