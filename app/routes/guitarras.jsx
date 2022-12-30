//Aplicando Nested Routes

//CSS
import styles from '~/styles/guitarras.css';

//Remix React
import { Outlet, useOutletContext } from "@remix-run/react";

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ];
}

const Guitarras = () => {
  
  return (
    <main className="contenedor">
      <Outlet 
      context={useOutletContext()}
      />
    </main>
  )
}

export default Guitarras;