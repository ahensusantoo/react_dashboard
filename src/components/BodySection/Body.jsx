import React from 'react'
import './Body.css'
import Top from './TopSection/Top'
import Listing from './ListingSection/Listing'
import Ativity from './ActivitySection/Activity'

const Body = () => {
  return (
    <div className='mainContainer'>
      <Top/>
      <div className='bottom flex'>
      <Listing/>
      <Ativity/>
      </div>
    </div>
  )
}

export default Body