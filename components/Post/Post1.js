
import { useGetPostsQuery } from '@/redux/posts/postSlice';
import Link from 'next/link'
import React from 'react';
import moment from 'moment';
import readingTime from 'reading-time';
import Image from 'next/image';



const Post1 = () => {

  const { data, isLoading, isError, isSuccess } = useGetPostsQuery();

  if (isLoading) return "Loading...";
  if (isError) return "Something went wrong....";

  if (isSuccess) {
    return (
      <>
        {data.map((post, index) => {
          const stats = readingTime(post.description);
          return <div key={index} className='flex gap-x-20 post-card mb-40'>
            <div>
              <Link href={`/posts/${post.id}`}>
                <Image width={500} height={500} className='w-210 h-210 br-5 object-cover' src={post.image} alt="" />
              </Link>
            </div>
            <div className='content'>
              <button className='btn bg-blue fs-600'>{post.category}</button>
              <Link href={`/posts/${post.id}`}> <h2>{post.title}</h2></Link>
              <p className='line-clamp-2 mb-10'>{post.description}</p>
              <div>
                <span>{moment(post.createdDate).format("ll")}</span>  .
                <span> {stats.text}</span>
              </div>
            </div>
          </div>
        }

        )}
      </>
    )
  }







}

export default Post1