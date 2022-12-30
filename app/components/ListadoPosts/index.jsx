
import { Post } from '~/components/Post';

const ListadoPosts = ( { posts, limit } ) => {

  const newPosts = posts.slice(0, limit);

  return (
    <>
    <h2 className="heading"> Blog </h2>
      <div className="blog">
        { newPosts.map((post, index) => (
          <Post
            key={`${post.id}-${index}`}
            post={post?.attributes}
          />
        ))}
      </div> 
    </>
  )
}

export { ListadoPosts };
