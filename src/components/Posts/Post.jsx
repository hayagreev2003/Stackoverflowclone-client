import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';

import copy from "copy-to-clipboard";
import { likePost, dislikePost, addComment, deleteComment } from '../../actions/posts';

const Post = ({ post }) => {

  const User = useSelector((state) => state.currentUserReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = window.location.href + `/${post._id}`;

  const [isLiked, setIsLiked] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (post.likes.includes(User?.result._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [post.likes, User]);


  const handleLike = () => {
    if (User === null) {
      alert("Login or SignUp to continue!!!");
      navigate('/login');
    } else {
      dispatch(likePost(post._id, User?.result._id))
    }
  };

  const handleDislike = () => {
    if (User === null) {
      alert("Login or SignUp to continue!!!");
      navigate('/login');
    } else {
      dispatch(dislikePost(post._id, User?.result._id))
    }
  };

  const handleShare = () => {
    copy(url)
    alert(`${url} - Copied URL to clipboard!`)
  };

  const handleAddComment = () => {
    if (User === null) {
      alert('Login or Signup to continue!!');
      navigate('/login');
    } else {
      dispatch(addComment(post._id, User.result._id, comment, User.result.name));
      setShowCommentModal(false); // Close the comment modal
      setComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    // Dispatch action to delete comment
    dispatch(deleteComment(post._id, commentId));
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <div className='post-container'>
        <div className='post-top'>
          <div className='post-icon'>
            <Link to={`/Users/${post.userId}`} style={{ textDecoration: 'none' }}>
              <Avatar backgroundColor="orange" px='10px' py="10px" borderRadius='50%' fontSize='20px' fontWeight='500'>{post?.name.charAt(0).toUpperCase()} </Avatar>
            </Link>
          </div>

          <div className='post-heading'>
            <Link to={`/Users/${post.userId}`} style={{ textDecoration: 'none' }}>
              <span className='heading-name'>{post?.name} </span>
            </Link>
          </div>
        </div>

        <div className='post-description'>
          <p>
            {showFullDescription ? post?.desc : `${post?.desc.slice(0, 50)}...`}
          </p>
          {post?.desc.length > 50 && (
            <button className='see-more-btn' onClick={toggleDescription}>
              {showFullDescription ? 'See Less' : 'See More..'}
            </button>
          )}
        </div>

        <div className='line'></div>
        <div className='post-middle'>
          <div className='post-middle-1'>
            {
              post?.videoUrl === undefined ?
                <img src={post?.imageUrl} alt="somepicture" /> :
                <video src={post?.videoUrl} controls />
            }
          </div>
          
          <div className='post-bottom'>
            <div className='post-options'>
              {isLiked ?
                <i className="fa-solid fa-thumbs-up" onClick={handleDislike}></i> :
                <i className="fa-regular fa-thumbs-up" onClick={handleLike} ></i>
              }
              <i className="fa-regular fa-comment" onClick={() => setShowCommentModal(true)}></i>
              <i className="fa-regular fa-share-from-square" onClick={handleShare}></i>
              <span className='post-likes'>{post?.likes.length} likes</span>
              <span className='post-comments'>{post?.comments.length} comments</span>
            </div>
          </div>

          {showCommentModal && (
            <div className='modal'>
              <textarea
                className='comment-textarea'
                rows='4'
                cols='50'
                placeholder='Write a comment...'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className='submit-comment-btn' onClick={handleAddComment}>Submit Comment</button>
              <button className='cancel-comment-btn' onClick={() => setShowCommentModal(false)}>Cancel</button>
            </div>
          )}
          <div className='post-comments-section'>
            <h1>Comments</h1>
            <hr />
            <ul className='comments-list'>
              {post?.comments?.map((comment) => (
                <li key={comment.commentId}>
                  <div className='comment-container'>
                    {comment.name && (
                      <div className='avatar-container'>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                          <Avatar className='avatar' backgroundColor="orange" px='7px' py="6px" borderRadius='50%' fontSize='15px' >
                            {comment.name.charAt(0).toUpperCase()}
                          </Avatar>
                        </Link>
                        <p className='comment-user-name'>{comment.name}</p>
                      </div>)}
                    <p className='comment-content'>{comment.content}</p>
                    {comment.userId === User?.result._id || post.userId === User?.result._id ? (
                      <button onClick={() => handleDeleteComment(comment.commentId)}>
                        Delete
                      </button>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
