import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { addFriend, removeFriend } from '../../actions/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import useRandomColor from '../../hook/useRandomColor';

import Avatar from '../../components/Avatar/Avatar';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import './UsersProfile.css';
import Friends from './Friends';

const UserProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const users = useSelector((state) => state.usersReducer);

  const currentProfile = users.filter((user) => user._id === id)[0];

  const currentUser = useSelector((state) => state.currentUserReducer);

  const currentUserFriends = users.filter(
    (user) => user._id === currentUser?.result._id
  )[0]?.friends;

  const dispatch = useDispatch();

  const [Switch, setSwitch] = useState(false);

  const [isFriend, setIsFriend] = useState(false);

  const color = useRandomColor();

  useEffect(() => {
    if (currentUser !== null && currentUserFriends !== undefined) {
      if (currentUserFriends.includes(currentProfile._id)) {
        setIsFriend(true);
      } else {
        setIsFriend(false);
      }
    }
  }, [currentUserFriends, currentUser, currentProfile]);

  const handleAddFriend = () => {
    if (currentUser === null) {
      alert('Login or SignUp to continue!!!');
      navigate('/login');
    } else {
      dispatch(addFriend(id, currentUser?.result._id));
    }
  };

  const handleRemoveFriend = () => {
    if (currentUser === null) {
      alert('Login or SignUp to continue!!!');
      navigate('/login');
    } else {
      dispatch(removeFriend(id, currentUser?.result._id));
    }
  };

  return (
    <>
    <div className='userprofilepage-container'>
      <section className='profilebio-page'>
        <div className='profile-bio-left'>
          <div className='user-details-container'>
            <div className='user-details'>

              <Avatar
                backgroundColor={`#${color}`}
                color='white'
                fontSize='50px'
                px='50px'
                py='25px'
                borderRadius='10px'
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>

              <div className='user-name'>
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{' '}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>

                {id === currentUser?.result._id ? (
                  <p></p>
                ) : isFriend ? (
                  <button
                    className='user-friend-button'
                    onClick={handleRemoveFriend}
                  >
                    Remove Friend
                  </button>
                ) : (
                  <button
                    className='user-friend-button'
                    onClick={handleAddFriend}
                  >
                    Add Friend
                  </button>
                )}
              </div>
            </div>

            {currentUser?.result._id === id && (
              <button
                type='button'
                onClick={() => setSwitch(!Switch)}
                className='edit-profile-btn'
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <div className='bio-con'>
            <ProfileBio currentProfile={currentProfile} users={users} />
          </div>
        </div>
      </section>
      <section className='profile-friendspage'>
        <div className='profile-frnds-right'>
          <Friends currentProfile={currentProfile} users={users} />
        </div>
      </section>

      {Switch && (
        <div className='modal-backdrop' onClick={() => setSwitch(false)}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
          </div>
        </div>
      )}


    </div>
    </>
  );
};

export default UserProfile;
