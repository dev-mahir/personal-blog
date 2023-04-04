const { default: Link } = require("next/link");

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Logo from './Logo';

const Header = () => {
  const { pathname } = useRouter();
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setMenu(false);
    setUser(false);
  }, [pathname]);



  return (
    <header className='position-sticky'>
      <div className="container flex justify-between items-center">

        <Logo />

        <div className={`menu-wrapper ${menu ? "show" : ""}`}>
          <div className="show-menu flex items-center gap-x-50">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/">Features</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="right flex items-center gap-x-7">
              {/* <Link href="/signin" className="btn" >Sign in</Link>
              <Link href="/signup" className="btn signup-btn mr-20" >Sign up</Link> */}
              <div className='position-relative '>
                <button onClick={() => setUser(!user)} className='border-0 bg-transparent'><img className='w-30 h-30 br-full' src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></button>

                {user && <div className='position-absolute right-0 top-40 bg-white shadow-sm p-15 br-5'>
                  <h5>Md Mahir</h5>
                  <span className='py-5 block mb-10 hover:text-blue'>mdmahir.ds@gmail.com</span>
                  <hr />
                  <div className='mt-15'>
                    <Link href={`/author/ll`} className='block  text-primary fs-14 mb-10 fw-500 hover:text-blue' >Profile</Link>
                    <button className='btn p-0 fw-500 text-primary hover:text-blue '>Sign out</button>
                  </div>
                </div>}

              </div>

              <button className="btn mr-10" > <i className='fs-22 bx bx-search'></i>  </button>
              <button className="btn" > <i class='fs-22 bx bx-moon' ></i>   </button>
            </div>
          </div>
        </div>

        <button className='hamburger btn' onClick={() => setMenu(!menu)
        }>
          {!menu ? <i class='bx bx-menu-alt-right'></i> : <i class='bx bx-x'></i>}
        </button>
      </div>
    </header>
  )
}

export default Header;