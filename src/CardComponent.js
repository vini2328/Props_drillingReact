import React from 'react'
import { Dashboard } from './Dashboard'
import SlideBar from './SlideBar'



function CardComponent() {
  return (
    <div className='d-flex'>
        <SlideBar />

        <Dashboard amount='23000'Annual="300000"  now="10%" pending="25"/>

    </div>
  )
}

export default CardComponent