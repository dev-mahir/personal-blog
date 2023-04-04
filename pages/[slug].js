import Newsletter from '@/components/Newsletter/Newsletter';
import Post2 from '@/components/Post/Post2/Post2';
import ShareArticale from '@/components/ShareArticale/ShareArticale';
import Link from 'next/link';
import React from 'react'

const SinglePage = () => {
  return (

    <div className='container py-80'>
      <div className='max-w-800 mx-auto'>
        <div className='post-info'>
          <h2 className="title  sm:text-left px-50 sm:px-0 text-center ">
            Autumn is a second spring when every leaf is a flower
          </h2>
          <div className='post-meta flex gap-x-15 my-20 items-center'>
            <Link href="#" className='flex gap-x-8 items-center fw-500 text-primary '><img className='h-30 w-30 br-full' src="https://arun.gbjsolution.com/content/images/size/w250/2021/05/harini.jpg" alt="" /> Harini</Link>
            <span> May 02, 2021</span>
            <span> 4 min read</span>
          </div>

          {/* content  */}
          <div>
            <p>I was afterwards accquainted with some particulars of the conversation by Miss Mirvan; who told me that Madame Duval informed them of her plan wih the utmost complacency, and seemed to think herself very fortunate in having suggested it; but, soon after, she accidentally betrayed, that she had been instigated to the scheme by her relations the Branghtons, whose letters, which she received today, first mentioned the proposal. She declared that she would have nothing to do with any roundabout ways, but go openly and instantly to law, in order to prove my birth, real name, and title to the estate of my ancestors.</p>
          </div>
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

export default SinglePage;