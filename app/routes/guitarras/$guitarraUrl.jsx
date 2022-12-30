//Remix React
import { useLoaderData, useOutletContext } from "@remix-run/react";

//React
import { useState } from 'react';

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

const Guitarra = () => {
    
    const { stateUpdaters } = useOutletContext();

    const { addShoppingCart } = stateUpdaters;

    const guitarra = useLoaderData();

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  
    const [state, setState] = useState({
        id: guitarra[0].id,
        nombre,
        descripcion,
        precio,
        imagen: imagen.data.attributes.url,
        cantidad: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(state.cantidad < 1 ){
            alert("Debes seleccionar una cantidad");
            return;
        }

        addShoppingCart( state );

    }

    return (
    <div className="guitarra">
        <img className="image" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{ nombre }</h3>
            <p className="texto">{ descripcion }</p>
            <p className="precio">${ precio }</p>
            
            <form onSubmit={handleSubmit} className="formulario" action="">
                <label htmlFor="cantidad"> Cantidad </label>
                <select name="cantidad" id="cantidad"
                onChange={(e) => setState({...state, cantidad: Number(e.target.value)})}>
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="Añadir al Carrito" />
            </form>
        </div>
    </div>
  )
}
 
export default Guitarra;
