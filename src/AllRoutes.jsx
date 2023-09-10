import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux';

import Home from './Pages/Home/Home';
import Home1 from './Pages/Home/Home1';
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';
import Tags from './Pages/Tags/Tags';
import Users from './Pages/Users/Users';
import UserProfile from './Pages/UserProfile/UserProfile';
import Payment from './Pages/Subscription/Payment';
import Community from './Pages/SocialCommunity/Community';
import CommunityPost from './Pages/SocialCommunity/CommunityPost';

const AllRoutes = () => {
  const User = useSelector((state) => (state.currentUserReducer));
  return (
    <Routes>
      <Route path='/' element={ User !== null ? < Home /> : <Home1/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path='/Questions' element={ <Questions/>} />
      <Route path='/AskQuestion' element={ <AskQuestion/>} />
      <Route path='/Questions/:id' element={< DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path='/Community' element={User !== null ? <Community />:<Login/>} />
      <Route path='/Community/:id' element={<CommunityPost />} />
    </Routes>
  )
}

export default AllRoutes