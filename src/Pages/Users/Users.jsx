import React from 'react'
import './Users.css'
import LeftSidebar1 from '../../components/LeftSidebar/leftsidebar-1/leftsidebar1'
import UsersList from './UsersList'

const Users = () => {

    return (
        <div className='home-container-1'>
            <LeftSidebar1 />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h1 style={{fontWeight: "400"}}>Users</h1>
                <UsersList /> 
            </div>
        </div>
    )
}

export default Users