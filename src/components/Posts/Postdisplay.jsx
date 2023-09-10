import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';

const Postdisplay = () => {
  const posts = useSelector((state) => state.postsReducer)
  const postsList = posts.data;
  return (
    <div className='Posts'>
      { postsList === null ?
        <h1>Loading...</h1> :
        <>
          {postsList.map((post) => (
            <Post post={post} key={post._id} />
            ))
          }
        </>
      }
    </div>
  )
}

export default Postdisplay;
