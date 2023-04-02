import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (

    <div className='h-screen sign-wrapper'>

      <div className='grid grid-cols-2'>
        <div className='pl-10 pt-10'>

          <button className='btn br-4 flex gap-x-5 items-center'> <i class='bx bx-arrow-back'></i> Home</button>

          <div className='text-center left mt-50'>
            <h2>Arun Roy</h2>
            <div className='flex flex-col border-1 form-wrapper'>
              <h2>Sign up</h2>
              <p>SGet access to members only content.</p>
              <form>
                <input type="text" placeholder='Your name' />
                <input type="text" placeholder='Your email address' />
                <button type='submit' className='btn bg-blue br-5 w-full'> Continue </button>
              </form>

              <span>Already have an account?  <Link href="/signin">Sign in</Link>  </span>
            </div>
          </div>
        </div>








        <div className='h-screen'>
          <img className='w-full h-full' src="https://arun.gbjsolution.com/content/images/size/w1000/2021/05/yang-shuo-uYHYGgvkz_Y-unsplash.jpg" alt="" />
        </div>
      </div>



    </div>



  )
}

export default Signup