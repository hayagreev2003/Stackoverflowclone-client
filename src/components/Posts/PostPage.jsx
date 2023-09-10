import React from 'react';

import Postdisplay from './Postdisplay';
import AddPost from './AddPost';

import './PostSide.css';

const PostSide = () => {
  return (
   <div className="PostSide">
       <AddPost/>
       <Postdisplay/>
   </div>
  )
}

export default PostSide;