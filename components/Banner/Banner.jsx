import Link from 'next/link'
import React from 'react'
import Socail from '../Socail/Socail'

const Banner = () => {
  return (
    <section className=' banner py-100 grid grid-cols-2 items-center'>
      <div>
        <h1>Hay, I am Arun</h1>
        <h4 className='my-30 lh-28 fs-22 letter-spacing-1 fw-500'>An architect, software developer, YouTuber and keynote speaker. On this site I write about my learning and experience.</h4>
        <Socail />
      </div>
      <div className='right'>
        <div className='img ml-auto'>
          <img src="https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Banner