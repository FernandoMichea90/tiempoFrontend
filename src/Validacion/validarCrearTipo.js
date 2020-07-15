export  default function validacionTipoTiempo(valores)
{

    let errores={}


        if(!valores.tipo)
        {
            errores.tipo="El tipo de tiempo es obligatorio"
        }

        if(!valores.color)
        {
            errores.color="El color  es obligatorio"
        }



        return errores;
}