
import { Post } from '~/components/Post';

const ListadoPosts = ( { posts } ) => {
  return (
    <>
    <h2 className="heading"></h2>
      <div className="blog">
        { posts.map((post, index) => (
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
