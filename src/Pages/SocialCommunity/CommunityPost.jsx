import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Post from '../../components/Posts/Post';

const CommunityPost = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.postsReducer);
  const post = posts.data?.filter((p) => p._id === id)[0];

  // Check if post is null or undefined and show a loading state or an error message
  if (!post) {
    return <div>Loading...</div>; // You can replace this with an appropriate loading state or error message
  }

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-3">
        <Post post={post} />
      </div>
    </div>
  )
}

export default CommunityPost;
