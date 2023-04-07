import Newsletter from '@/components/Newsletter/Newsletter';
import Post2 from '@/components/Post/Post2/Post2';
import ShareArticale from '@/components/ShareArticale/ShareArticale';
import { useGetSinglePostQuery } from '@/redux/posts/postSlice';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import readingTime from 'reading-time';

const SinglePage = () => {
  const { query } = useRouter();
  const { data, isLoading, isError, isSuccess } = useGetSinglePostQuery(query.id);


  if (isLoading) return "Loading....";
  if (isSuccess) {

    const { text } = readingTime(data.description);

    return (

      <div className='container py-80'>
        <div className='max-w-800 mx-auto'>
          <div className='post-info'>
            <h2 className="title  sm:text-left px-50 sm:px-0 text-center "> {data.title}</h2>
            <div className='post-meta flex gap-x-15 my-20 items-center'>
              <Link href="#" className='flex gap-x-8 items-center fw-500 text-primary '>
                <Image height={500} width={500} className='h-30 w-30 br-full' src={data.image} alt="" />
                {data.name}  </Link>


              <span> {moment(data.createdDate).format("ll")} </span>


              <span> {text} </span>
            </div>

            <div>{data.description}</div>
          </div>


          <div className='py-40'>
            <ShareArticale />
          </div>
        </div>
        <Newsletter />

        <div className="container">
          <div className='mt-50'>
            <h3 className='text-center fs-24'> You might also like</h3>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-30  gap-x-25 mt-30'>
              <Post2 />
              <Post2 />
              <Post2 />
              <Post2 />
            </div>
          </div>
        </div>
      </div>
    )

  }




}

export default SinglePage;