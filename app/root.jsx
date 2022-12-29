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
  return (
    <Document>
        <Outlet/>
    </Document>
    )
}

function Document ( { children } ){
    return (
        <html>
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
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