import { useGetSocailQuery } from '@/redux/socail/socailSlice'
import Link from 'next/link'
import React from 'react'

const Socail = () => {

  const { data, isLoading, isError, isSuccess } = useGetSocailQuery();

  if (isLoading) return "Loading...."
  if (isSuccess) {
    return (
      <div className='socail-wrapper flex items-center sm:gap-x-10'>
        <p className='fw-600'>Follow:</p>
        <ul className='flex gap-x-15'>
          <li><Link href={`${data.facebook}`} > <i className='bx bxl-facebook'></i></Link></li>
          <li><Link href={`${data.twitter}`}> <i className='bx bxl-twitter'></i></Link></li>
          <li><Link href={`${data.linkedin}`}> <i className='bx bxl-linkedin'></i></Link></li>
          <li><Link href={`${data.github}`}> <i className='bx bxl-github'></i></Link></li>
        </ul>
      </div>
    )
  }



}

export default Socail;