import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'

import decode from 'jwt-decode'


const Navbar = () => {

    const dispatch = useDispatch();

    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }


    useEffect(() => {
        const token = User?.token;
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [User?.token, dispatch]);

  return (
    <nav className='main-nav'>
        <div className='navbar'>

            <Link to ='/'>
                <img src={logo} alt='logo' className='nav-item nav-logo' />
            </Link>

            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>ForTeams</Link>

            <form>
                <input type='text' placeholder='Search..'/>
                <img src={search} alt='search' className="search-icon" width="18"/>
            </form>
            { User === null ? (
            <>
            <Link to='/login' className='nav-item nav-links'>Login</Link> 
            <Link to='/signup' className='nav-item nav-signup'>Signup</Link>
            </> ) : (
            <>
            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"  width= '18px'height= '-10px' color='white'>
                <Link to={`/Users/${User?.result?._id}`}style={{color:"white",textDecoration:"none",fontSize:"16px"}}>{User.result.name.charAt(0).toUpperCase()}</Link>
            </Avatar>
            <button  className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
            </>
            )}
        </div>
    </nav>
  );
};

export default Navbar;