import styles from '~/styles/nosotros.css';

import Imagen from "../../public/img/nosotros.jpg";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: 'Venta de Guitaras, blog de Música'
  };
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: Imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading"> Nosotros </h2>
      <div className="contenido">
        <img src={Imagen} alt="imagen de nosotros" />
        <div>
          <p>
            Duis pharetra, risus sed finibus tempus, purus orci pulvinar turpis,
            quis vulputate elit felis ac massa. Aliquam vitae posuere orci.
            Etiam sed ligula et ante cursus iaculis eu sed sapien. Suspendisse
            id dui vel sapien fermentum tristique. Quisque a ex pulvinar erat
            hendrerit dignissim ut eu libero. Suspendisse accumsan sollicitudin
            eleifend. Suspendisse vel ullamcorper arcu. Integer dapibus id purus
            eget mattis.
          </p>
          <p>
            Duis pharetra, risus sed finibus tempus, purus orci pulvinar turpis,
            quis vulputate elit felis ac massa. Aliquam vitae posuere orci.
            Etiam sed ligula et ante cursus iaculis eu sed sapien. Suspendisse
            id dui vel sapien fermentum tristique. Quisque a ex pulvinar erat
            hendrerit dignissim ut eu libero. Suspendisse accumsan sollicitudin
            eleifend. Suspendisse vel ullamcorper arcu. Integer dapibus id purus
            eget mattis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
