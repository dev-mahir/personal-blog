import React from 'react'
import Socail from '../Socail/Socail'
import moment from 'moment'

const Footer = () => {
  return (
    <footer className='py-30 mt-50'>
      <div className='container flex justify-between'>
        <div>
          <Socail />
        </div>
        <div>
          <p>@{moment().year()} Mahir - All right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer