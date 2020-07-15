export default function ValidarEditarTipoTipo(valores)
{

    let errores={}




    if(!valores.tipo)
    {

        errores.tipo="el tipo es obligatorio"
    }
    if(!valores.color)
    {
        errores.color="el color es obligatorio"

    }


    return errores






}