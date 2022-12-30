//Remix React
import { useLoaderData } from "@remix-run/react";

//Models
import { getPosts } from "~/models/post.server"

//Components
import { ListadoPosts } from '~/components/ListadoPosts';

export function meta(){
  return {
    title: "GuitaraLA - Blog",
    description: 'GuitarraLA - Donde te compartiremos información'
  }
}

export async function loader(){

  const posts = await getPosts();

  return posts;
}

const Blog = () => {

  const posts = useLoaderData();

  return (
    <ListadoPosts posts={posts} />
  )
}

export default Blog
