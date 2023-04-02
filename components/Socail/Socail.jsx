import Link from 'next/link'
import React from 'react'

const Socail = () => {
  return (
    <div className='socail-wrapper flex items-center gap-x-10'>
      <p className='fw-600'>Follow:</p>
      <ul className='flex gap-x-15'>
        <li><Link href="#"> <i className='bx bxl-facebook'></i></Link></li>
        <li><Link href="#"> <i className='bx bxl-twitter'></i></Link></li>
        <li><Link href="#"> <i className='bx bxl-linkedin'></i></Link></li>
        <li><Link href="#"> <i className='bx bxl-github'></i></Link></li>
      </ul>
    </div>
  )
}

export default Socail