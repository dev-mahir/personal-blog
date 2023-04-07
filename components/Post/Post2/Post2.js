import { useGetPostsQuery } from '@/redux/posts/postSlice';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Post2 = () => {
  const { data, isLoading, isError, isSuccess } = useGetPostsQuery();


  if (isLoading) return "Loading...";
  if (isError) return "Something went wrong....";
  if (isSuccess) {
    return (<>
      {data.map(post => {
        return <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <Image width={500} height={500} className='w-210 h-210 br-5 object-cover' src={post.image} alt="" />
          </Link>
          <Link href={`/posts/${post.id}`}><h2 className='fs-20 lh-24 mb-10 mt-10 line-clamp-2'></h2></Link>
          <div className='flex items-center gap-x-8'>
            <span> {moment(post.createdData).format("ll")} </span> .
            <span>3 min read </span>
          </div>
        </div>
      }
      )}
    </>)
  }
}

export default Post2;