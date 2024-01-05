import { useSelector,useDispatch } from "react-redux"
import { selectAllPosts ,getPostsStatus,getPostsError,fetchPosts} from "./postSlice"
import { useEffect } from "react"
import PostsExcept from "./PostsExcept"
import React from 'react'

const PostList = () => {
  
  const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(()=>{
      if(postStatus ==='idle'){
        dispatch(fetchPosts())
      }
      },[dispatch,postStatus])
    
      let content;
      if (postStatus === 'loading') {
          content = <p>"Loading..."</p>;
      } else if (postStatus === 'succeeded') {
          const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
          content = orderedPosts.map(post => <PostsExcept key={post.id} post={post} />)
      } else if (postStatus === 'failed') {
          content = <p>{error}</p>;
      }
      
  return (
    <section >
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default PostList