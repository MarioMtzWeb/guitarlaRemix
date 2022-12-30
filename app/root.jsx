//Remix React
import {
    Meta,
    Links,
    Link,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
} from "@remix-run/react";

//React Hooks
import { useEffect, useState } from 'react';

//Styles
import styles from '~/styles/index.css';

//Components
import { Header } from '~/components/Header';
import { Footer } from "~/components/Footer";

export function meta(){
    return (
        {
            charset: 'utf8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    );
};

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
        },
        {
            rel: 'preconnect',
            href: 'http://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'http://fonts.gstatic.com',
            crossOrigin: "true",
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

export default function root () {

    const stateDefault = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ShoppingCart')) ?? [] : null;

    const [state, setState] = useState({
        shoppingCart: stateDefault,
    });

    useEffect(() => {
        localStorage.setItem('ShoppingCart', JSON.stringify(state.shoppingCart));
    }, [state])

    let totalItemsBuy = state.shoppingCart?.length;

    const addShoppingCart = ( buy ) => {


        if(state.shoppingCart.find(el => el.id === buy.id)){
            
            const newShoppingCart = [...state.shoppingCart];
            
            const index = newShoppingCart.findIndex(el => el.id === buy.id);

            newShoppingCart[index].cantidad = buy.cantidad;
            
            setState({
                ...state,
                shoppingCart: newShoppingCart,
            });

            return;
        }

        const newShoppingCart = [...state.shoppingCart, buy];

        setState({
            ...state,
            shoppingCart: newShoppingCart,
        });
    };

    const updateQuantity = ( { id, quantity } ) => {

        const newShoppingCart = [...state.shoppingCart];
        const index = newShoppingCart.findIndex(el => el.id === id);
        newShoppingCart[index].cantidad = quantity;
        setState({
            ...state,
            shoppingCart: newShoppingCart,
        });

    };

    const deleteItemBuy = ( { id } ) => {

        const newShoppingCart = state.shoppingCart.filter(el => el.id !== id);
        
        setState({
            ...state,
            shoppingCart: newShoppingCart,
        });
    };

    const stateApp = {
        state,
        totalItemsBuy,
    };

    const stateUpdaters = {
        addShoppingCart,
        updateQuantity,
        deleteItemBuy,
    }

  return (
    <Document totalItems={totalItemsBuy} >
        <Outlet
        context={{
            stateApp,
            stateUpdaters
        }}
        />
    </Document>
    )
}

function Document ( { children, totalItems } ){
    return (
        <html>
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header totalItems={totalItems} />
                 { children }
                 <Footer/>
                 <Scripts/>
                 <LiveReload/>
            </body>
        </html>
    )
};

/*** Manejo de Errores ***/

export function CatchBoundary(){
    const error = useCatch();
    return (
        <Document>
            <p className="error"> { error.status } - {error.statusText} </p>
            <Link className="error-enlace" to="/"> Regresar al Inicio </Link>
        </Document>
    )
};

export  function ErrorBoundary( { error } ) {
    return (
        <Document>
            <p className="error"> { error.status } - {error.statusText} </p>
            <Link className="error-enlace" to="/"> Regresar al Inicio </Link>
        </Document>
    )
}