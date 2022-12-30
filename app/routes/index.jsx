//CSS
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

//Remix React
import { useLoaderData } from '@remix-run/react';

//Models
import { getGuitarras } from '~/models/guitarras.server.js';
import { getPosts } from '~/models/post.server.js';
import { getCurso } from '~/models/curso.server.js';

//Components
import { ListadoGuitarras } from '~/components/ListadoGuitarras';
import { ListadoPosts } from '~/components/ListadoPosts';
import { Curso } from '~/components/Curso';

export function meta(){
  return {

  };
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras,
    },
    {
      rel: 'stylesheet',
      href: stylesPosts,
    },
    {
      rel: 'stylesheet',
      href: stylesCurso,
    }
  ];
}

export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  console.log("Error")

  return {
    guitarras,
    posts,
    curso,
  }
}

const Index = () => {

  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main>
        <ListadoGuitarras
        guitarras={guitarras}
        limit={3}
        />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">  
        <ListadoPosts
          posts={posts}
          limit={3}
        />
      </section>
    </>
  )
}

export default Index;