
import CreatePost from '@/components/Author/CreatePost/CreatePost';
import Newsletter from '@/components/Newsletter/Newsletter';
import Post1 from '@/components/Post/Post1';
import PostTable from '@/components/Post/PostTable/PostTable';
import Socail from '@/components/Socail/Socail';
import Link from 'next/link';
import React from 'react'

const Author = () => {
  return (
    <div className='container py-60'>
      <div className="max-w-800 mx-auto">

        <div className='flex gap-x-20 post-card mb-100'>
          <div className=''>
            <img className='w-110 h-110 br-5 object-cove br-full' src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

          <div className='content'>
            <h3>Mahir</h3>
            <div className='mt-6 mb-6'>
              <span>Tangail</span>  .
              <span> 5 posts </span>
            </div>
            <p className='line-clamp-2 mb-10'>Apurba is UI & UX designer by profession, photographer by passion. Solo traveller, blogger, badminton player and movie lover.</p>
            <Socail />
          </div>
        </div>

        <div className='mb-50 flex gap-x-20'>
          <Link className='flex items-center gap-x-7 text-primary  opacity-7 fw-600' href="/author/new-post">  <i class='bx bx-edit'></i> Create Post</Link>
          <Link className='flex items-center gap-x-7 text-primary  opacity-7 fw-600' href="/new-post">  <i class='bx bx-edit'></i> All Post</Link>
        </div>

        <CreatePost/>

        <div className='mb-50'>
          <PostTable />
        </div>

        <Post1 />
      </div>
      <div className='mt-50'>
        <Newsletter />
      </div>
    </div>
  )
}

export default Author;