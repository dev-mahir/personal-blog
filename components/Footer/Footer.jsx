import React from 'react'
import Socail from '../Socail/Socail'

const Footer = () => {
  return (
    <footer className='py-30 mt-50'>
      <div className='container flex justify-between'>
        <div>
          <Socail />
        </div>
        <div>
          <p>©2023 Mahir - All right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer