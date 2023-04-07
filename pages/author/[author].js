
import CreatePost from '@/components/Author/CreatePost/CreatePost';
import Newsletter from '@/components/Newsletter/Newsletter';
import Post1 from '@/components/Post/Post1';
import PostTable from '@/components/Post/PostTable/PostTable';
import Socail from '@/components/Socail/Socail';
import { useGetAuthorQuery } from '@/redux/author/authorSlice';
import Image from 'next/image';
import React from 'react'

const Author = () => {

  const { data, isLoading, isError, isSuccess } = useGetAuthorQuery();
  if (isLoading) return 'Loading...'
  if (isError) return "Something went wrong."
  if (isSuccess) { 
      return (
    <div className='container py-60'>
      <div className="max-w-800 mx-auto">

        <div className='flex gap-x-20 post-card mb-100'>
          <div className=''>
            <Image width={500} height={500} className='w-110 h-110 br-5 object-cove br-full' src={data.image} alt="" />
          </div>
          <div className='content'>
            <h3>{data.name}</h3>
            <div className='mt-6 mb-6'>
              <span>{data.location}</span>  .
              <span> 5 posts </span>
            </div>
            <p className='line-clamp-2 mb-10'>{data.description}</p>
            <Socail />
          </div>
        </div>

        {/* <div className='mb-50 flex gap-x-20'>
          <Link className='flex items-center gap-x-7 text-primary  opacity-7 fw-600' href="/author/new-post">  <i class='bx bx-edit'></i> Create Post</Link>
          <Link className='flex items-center gap-x-7 text-primary  opacity-7 fw-600' href="/new-post">  <i class='bx bx-edit'></i> All Post</Link>
        </div>

        <CreatePost/> */}

        <div className='mb-50'>
          {/* <PostTable /> */}
        </div>


        <Post1 />
      </div>
      <div className='mt-50'>
        <Newsletter />
      </div>
    </div>
  )
  }




}

export default Author;