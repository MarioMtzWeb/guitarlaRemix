//Aplicando Nested Routes

//CSS
import styles from '~/styles/blog.css';

//Remix React
import { Outlet } from "@remix-run/react";

export function meta(){
  return {
    title: "GuitaraLA - Blog",
    description: 'GuitarraLA - Donde te compartiremos información'
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

const Blog = () => {


  return (
    <main className="contenedor">
      <Outlet/>
    </main>
  )
}

export default Blog
