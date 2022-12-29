//CSS
import styles from '~/styles/blog.css';

//Remix - React
import { useLoaderData } from '@remix-run/react';

//Helps
import { formatDate } from '~/helpers';

//Models
import { getPost } from '~/models/post.server.js';

export async function loader({ request, params }){

    const { postUrl } = params;

    const post = await getPost( postUrl );

    if(post.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post No Encontrado'
        })
    }

    return post;
};

export function meta({ data }){
    if(!data){
        return {
            title: `GuitarraAL - Post No Encontrado`, 
            description: `Guitarras, publicación donde informaras - Post no encontrado`
        }
    }
    
return {
    title: `GuitarraAL - ${data[0].attributes.titulo}`, 
    description: `Guitarras, publicación donde te informaras ${data[0].attributes.titulo}`
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

const Post = () => {

    const post = useLoaderData();

    const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <article className="contenedor post mt-3">
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{ formatDate(publishedAt) }</p>
            <p className="texto">{ contenido }</p>
        </div>
    </article>
  )
}

export default Post;