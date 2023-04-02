import Link from 'next/link';
import React from 'react'

const SinglePage = () => {
  return (

    <div className='container'>
      <div className='post-info'>
        <h2 className="title">
          Autumn is a second spring when every leaf is a flower
        </h2>
        <div className='post-meta'>
          <Link href="#"><img src="https://arun.gbjsolution.com/content/images/size/w250/2021/05/harini.jpg" alt="" /></Link>
        </div>
      </div>
    </div>

  )
}

export default SinglePage;