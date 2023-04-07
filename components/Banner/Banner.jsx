import Link from 'next/link'
import React from 'react'
import Socail from '../Socail/Socail'
import { useGetAuthorQuery } from '@/redux/author/authorSlice'
import Image from 'next/image'

const Banner = () => {
  const { data, isLoading, isError, isSuccess } = useGetAuthorQuery();

  if (isLoading) return "Loading...";
  if (isError) return "Something went wrong...";
  if (isSuccess) { 
      return (
    <section className=' banner py-100 grid grid-cols-2 items-center'>
      <div>
            <h1>Hay, I am {data.name}</h1>
            <h4 className='my-30 lh-28 fs-22 letter-spacing-1 fw-500'>{data.description}</h4>
        <Socail />
      </div>
      <div className='right'>
        <div className='img ml-auto'>
              <Image height={500} width={500} src={data.image} alt="" />
        </div>
      </div>
    </section>
  )
  }





}

export default Banner