import React from 'react';
import Friends from './Friends';

const ProfileBio = ({ currentProfile, users }) => {

    const friends = [];
    if (currentProfile?.friends.length !== 0) {
        currentProfile?.friends.forEach(id => {
            let friend = users.filter((user) => user._id === id)[0];
            friends.push(friend);
        });
    }

    return (
        <div>
            <div>
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            <h4>Tags of Expertise</h4>
                        <div className='edit-tags'>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </div>
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
            </div>
            <div style={{ marginTop: "1rem" }}>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
            </div>
            <div style={{display:'none'}}>
                <Friends currentProfile={currentProfile} users={users} />
            </div>
        </div>
    )
}

export default ProfileBio;
