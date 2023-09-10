import React from 'react'

import LeftSidebar1 from '../../components/LeftSidebar/leftsidebar-1/leftsidebar1'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

import "../../App.css"


const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar1 />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>

    </div>
  )
}

export default  Questions