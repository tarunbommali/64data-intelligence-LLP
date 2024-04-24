import React from 'react'
import HomeWrapper from '../components/HomeWrapper'
import SideNav from '../components/SideNav'

const Home = () => {
  return (
    <div className='flex absolute w-full'>
      <SideNav/>
      <HomeWrapper/>
    </div>
  )
}

export default Home