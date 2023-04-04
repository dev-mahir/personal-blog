import Link from 'next/link'
import React from 'react'

const ShareArticale = () => {
  return (
    <div className='bg-aliceblue br-10 py-30'>
      <div className='socail-wrapper flex flex-col gap-y-15 items-center'>
        <h3 className='fw-600 fs'>Share this article:</h3>
        <ul className='flex gap-x-20'>
          <li><Link href="#" title='Share on facebook' className='bg-white h-40 w-40 br-full flex items-center justify-center'> <i className='fs-22 bx bxl-facebook'></i></Link></li>
          <li><Link href="#" title='Share on twitter' className='bg-white h-40 w-40 br-full flex items-center justify-center' > <i className=' fs-22 bx bxl-twitter'></i></Link></li>
          <li><Link href="#" title='Share on linkedin' className='bg-white h-40 w-40 br-full flex items-center justify-center'> <i className='fs-22  bx bxl-linkedin'></i></Link></li>
          <li><Link href="#" title='Share on pinterest' className='bg-white h-40 w-40 br-full flex items-center justify-center'> <i className='fs-22  bx bxl-pinterest'></i></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default ShareArticale;