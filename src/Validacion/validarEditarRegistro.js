 export  default function validareditarregistro(valores)
 {
    console.log(valores);
    
    let errores ={};

    console.log("paso por la validaciones de editar ");



    if(!valores.inicio)
    {
        errores.inicio="la hora de inicio es obligatorio "
    }

    if(!valores.fin)
    {

        errores.fin="la  hora de termino es obligatorio "
    }

    if(!valores.tipo){

        errores.tipo="seleccionar un tipo es obligatorio"
    }
    if(!valores.categoria){
        errores.categoria="Seleccionar una Categoria es Obligatorio"

    }

    if(!valores.descripcion){

        errores.descripcion="Agregar un descripcion es obligatorio"
    }



    return errores
    
 }