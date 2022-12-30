//CSS
import styles from '~/styles/carrito.css'; 

//Remix-utils
import { ClientOnly } from 'remix-utils';

//Remix React
import { useOutletContext } from '@remix-run/react';

//Components
import { ItemProduct } from '~/components/ItemProduct';
import { useEffect, useState } from 'react';

export function meta(){
    return {
        title: 'GuitarLA - Carrito de Compras',
        description: 'Venta de guitarras, música, blog, carrito de compras, tienda'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
}

const Carrito = () => {

    const [totalBuy, setTotalBuy] = useState(0);

    const { stateApp } = useOutletContext();

    const { state } = stateApp; 

    useEffect(() => {

        const total = state.shoppingCart.reduce((acc, current) => acc + (current.cantidad * current.precio), 0);

        setTotalBuy(total);

    }, [stateApp]);

  return (
    <ClientOnly fallback={"Cargando..."} >
    {() => ( 
        <main className="contenedor">
            <h2 className="heading"> Carrito de Compras </h2>
            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                    { state.shoppingCart?.length === 0 ? "Carrito Vacío" 
                    : ( 
                        state.shoppingCart?.map((el, index) => (
                            <ItemProduct
                            key={`${el.id}-${index}`}
                            product={el}
                            />
                        ))
                    )}
                </div>
                <aside className="resumen">
                    <h3> Resumen del Pedido </h3>
                    <p> Total a pagar: ${totalBuy}</p>
                </aside>
            </div>
        </main>
    )}
    </ClientOnly>
  )
}

export default Carrito
