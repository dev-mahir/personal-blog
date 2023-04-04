import React from 'react'

const Newsletter = () => {
  return (
    <div className='__newsletter py-40 br-10 object-cover bg-no-repeat' style={{ background: "aliceblue" }}>
      <div className='max-w-600 mx-auto'>
        <h2 className='text-center'>Subscribe to newsletter</h2>
        <div className='flex items-center br-10 gap-x-10 border-box mt-20 mb-5 bg-white px-50 py-30'>
          <input type="email" className='h-full' placeholder='Enter your email' />
          <button className='bg-blue btn py fw-600 text-white hover:bg-dark-blue transition-3 py-10 br-3'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;