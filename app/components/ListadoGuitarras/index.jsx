//Components
import { Guitarra } from '~/components/Guitarra';

const ListadoGuitarras = ( { guitarras, limit } ) => {

  const newQuitarras = guitarras.slice(0, limit);

  return (
    <>
     <h2 className="heading"> Nuestra Colección </h2>
        { guitarras?.length && (
          <div className="guitarras-grid">
            { newQuitarras.map((guitarra, index) => (
              <Guitarra
                key={`${guitarra.id}-${index}`}
                guitarra={guitarra?.attributes}
              />
            ))}
          </div>
        )} 
    </>
  )
}

export { ListadoGuitarras };
