import Link from 'next/link'
import React from 'react'


const Post1 = () => {
  return (
    <>
      <div className='flex gap-x-20 post-card mb-40'>
        <div className=''>
          <Link href="/" >
            <img className='w-210 h-210 br-5 object-cover' src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        </div>

        <div className='content'>
          <button className='btn bg-blue fs-600'>Lifestyle</button>
          <Link href="/"> <h2> Self-observation is the first step of inner unfolding</h2></Link>
          <p className='line-clamp-2 mb-10'>Almost instantly the whole truth of the transaction seemed to rush upon her mind, and her wrath was inconceivably violent. She asked me a thousand questions in a</p>
          <div>
            <span>May 02, 2021</span>  .
            <span> 3 min read</span>
          </div>
        </div>
      </div>



      <div className='flex gap-x-20 post-card'>
        <div className='w-200'>
          <img className='w-full h-180 br-5 object-cover' src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='content'>
          <button className='btn bg-blue fs-600'>Lifestyle</button>
          <h2> Self-observation is the first step of inner unfolding</h2>
          <p className='line-clamp-2 mb-10'>Almost instantly the whole truth of the transaction seemed to rush upon her mind, and her wrath was inconceivably violent. She asked me a thousand questions in a</p>
          <div>
            <span>May 02, 2021</span>
            <span> 3 min read</span>
            <span> Public</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post1