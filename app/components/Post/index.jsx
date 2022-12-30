//Remix React
import { Link } from '@remix-run/react';

//Helpers
import { formatDate } from '~/helpers';

const Post = ( { post } ) => {
  
    const { titulo, contenido, imagen, url, publishedAt } = post;
  
    return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen blog - ${titulo}`} />
        <div className="contenido">
            <h2>{titulo}</h2>
            <p className="fecha">{formatDate(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/blog/${url}`} >Leer más...</Link>
        </div>
    </article>
  )
}

export { Post };
