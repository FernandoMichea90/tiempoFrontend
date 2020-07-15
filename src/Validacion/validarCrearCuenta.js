export default function validarCrearCuenta(valores)
{

    let errores={};

console.log("paso por validaciones???");

    // validar valores nulos

    if(!valores.inicio)
    {
        errores.inicio="El Inicio es Obligatorio"    
    }
    if(!valores.fin)
    {
        errores.fin="La hora de termino es Obligatorio"    
    }
    if(!valores.tipo)
    {
        errores.tipo="El tipo es Obligatorio"
    }
    if(!valores.categoria)
    {
        errores.categoria="La clasificacion es Obligatorio"
    }

    if(!valores.descripcion)
    {
        errores.descripcion="La Descripcion  es Obligatorio"
    }


    return errores;
}