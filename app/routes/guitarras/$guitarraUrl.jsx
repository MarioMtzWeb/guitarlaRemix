//CSS
import styles from '~/styles/guitarras.css';

//Remix React
import { useLoaderData } from "@remix-run/react";

//Models
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ request, params }){

    const { guitarraUrl } = params;

    const guitarra = await getGuitarra( guitarraUrl );

    if(guitarra.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }

    return guitarra;
}


export function meta( { data } ){

        if(!data){
            return {
                title: `GuitarraAL - Guitarra No Encontrada`, 
                description: `Guitarras, venta de guitarras, Guitarra No Encontrada`
            }
        }
        
    return {
        title: `GuitarraAL - ${data[0].attributes.nombre}`, 
        description: `Guitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`
    }
};

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
};

const Guitarra = () => {
    
    const guitarra = useLoaderData();

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  
    return (
    <main className="contenedor guitarra">
        <img className="image" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{ nombre }</h3>
            <p className="texto">{ descripcion }</p>
            <p className="precio">${ precio }</p>
        </div>
    </main>
  )
}
 
export default Guitarra;
