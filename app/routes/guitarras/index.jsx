//Remix React
import { useLoaderData } from "@remix-run/react";

//Models
import { getGuitarras } from "~/models/guitarras.server";

//Components
import { ListadoGuitarras } from '~/components/ListadoGuitarras';

export function meta(){
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'  
  }
}

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras;
};

const Guitarras = () => {
  
  const guitarras = useLoaderData();

  return (
      <ListadoGuitarras
      guitarras={guitarras}
      />
  )
}

export default Guitarras;