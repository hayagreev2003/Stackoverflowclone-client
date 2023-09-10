import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../../actions/posts';

import SOimage from '../../assets/SO_Teams.png';
import "./PostSide.css"

import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AddPost = () => {
  const navigate = useNavigate();

  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const [video, setVideo] = useState(null);
  const videoRef = useRef();

  const [uploading, setUploading] = useState(false);

  const handleImageClick = () => {
    setVideo(null);
    imageRef.current.click();
  }

  const handleVideoClick = () => {
    setImage(null);
    videoRef.current.click();
  }

  const handleImgFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(URL.createObjectURL(selectedFile));
    setFile(selectedFile);
  }

  const handleVidFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setVideo(URL.createObjectURL(selectedFile));
    setFile(selectedFile);
  }

  const handleUpload = () => {
    if (User == null) {
      alert("Login or signUp to continue!!!");
      navigate('/login');
    } else {
      setVideo(null)
      setImage(null)
      if (file) {
        const remoteFilePath = `uploads/${file.name}`;
        const storageRef = ref(storage, remoteFilePath);
        const uploadTask = uploadBytesResumable(storageRef, file);
        setUploading(true);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => { 
            setUploading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log(downloadURL);
              setUploading(false);
              if (image !== null) {
                const data = {
                  userId: User?.result._id,
                  name: User?.result.name,
                  desc: desc,
                  imageUrl: downloadURL
                }
                dispatch(addPost(data));
              } else {
                const data = {
                  userId: User?.result._id,
                  name: User?.result.name,
                  desc: desc,
                  videoUrl: downloadURL
                }
                dispatch(addPost(data));
              }
              setDesc('');
            });
          }
        );
      } else {
        if (!desc) {
          alert("Please enter something before posting !");
          return;
        };

        const data = {
          userId: User?.result._id,
          name: User?.result.name,
          desc: desc,
        }
        dispatch(addPost(data));
        setDesc('');
      };
    }
  }

  return (
    <div className='PostShare-experience'>
      {uploading && <div>Loading...Your post is uploading..</div>}
      <img src={SOimage} alt='' />
      <div>

        <input type='text' placeholder="Share your experience... " value={desc} onChange={(e) => { setDesc(e.target.value) }} />


        <div className='postOptions'>

          <div className='option' onClick={handleImageClick}>
            <i className="fa-regular fa-image" style={{ color: '#378fe9', fontSize: '16px' }} /><p>Image</p>
          </div>

          <div className='option' onClick={handleVideoClick}>
            <i className="fa-brands fa-youtube" style={{ color: '#5f9b41', fontSize: '16px' }} /><p>Video</p>
          </div>

          <button className="Post-button" onClick={handleUpload}><i className="fa-solid fa-plus" />&nbsp;Post</button>

          <div style={{ display: 'none' }}>
            <input type='file' name="myImage" ref={imageRef} onChange={handleImgFileChange} />
            <input type='file' name="myVideo" ref={videoRef} onChange={handleVidFileChange} />
          </div>

        </div>
        {image &&
          <div className='previewImage'>
            <i className="fa-solid fa-circle-xmark" onClick={() => setImage(null)}></i>
            <img src={image} alt="" />
          </div>
        }
        {
          video &&
          <div className='previewImage'>
            <i className="fa-solid fa-circle-xmark" onClick={() => setVideo(null)}></i>
            <video controls>
              <source src={video} type='video/mp4' />
            </video>
          </div>
        }
      </div>
    </div>
  )
}

export default AddPost;
