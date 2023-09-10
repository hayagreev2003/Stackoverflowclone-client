import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';

import './UsersProfile.css';

const Friends = ({ currentProfile, users }) => {
    const friends = [];
    if (currentProfile?.friends.length !== 0) {
        currentProfile?.friends.forEach(id => {
            let friend = users.filter((user) => user._id === id)[0];
            friends.push(friend);
        });
    }

    return (
        <div className='friendsList-page'>
            <div className='friends-heading'>
                <h4>Friends:</h4>
                <div className='frnds-list'>
                    {friends.length > 0 &&
                        friends.map((friend) => (
                            <div key={friend._id} className='friendId'>
                                {users.find((user) => user._id === friend._id) ? (
                                    <li className='friends-list'>
                                        <Link to={`/Users/${friend._id}`}>
                                            <Avatar
                                                backgroundColor='#4267b2'
                                                color='white'
                                                fontSize='20px'
                                                px='18px'
                                                py='10px'
                                                borderRadius='10px'
                                                cursor='pointer'
                                                width='fit-content'
                                            >
                                                {friend.name.charAt(0).toUpperCase()}
                                            </Avatar>
                                            <p className='frnds-name'>
                                                {friend.name}
                                            </p>
                                        </Link>
                                    </li>
                                    
                                ) : (
                                    <p>User not found</p>
                                )}
                            </div>
    
                        ))
                    }
                    {friends.length === 0 && <p>No friends 😕...</p>}
                </div>
            </div>
        </div>
    );
}

export default Friends;
