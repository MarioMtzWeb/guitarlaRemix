//Remix React
import { ClientOnly } from 'remix-utils';

const IconCart = ( { image, totalItemsBuy } ) => {

    let items = totalItemsBuy;

  return (
    <div className="itemCart">
      <ClientOnly>
        {() => (
          Boolean(items) && ( 
            <div className="totalItems">
              { items }
          </div>
        ))}
      </ClientOnly>  
      <img className="" src={image} alt="Imagen Carrito" />
    </div>
  )
}

export { IconCart };
