const { default: Link } = require("next/link");

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const {pathname} = useRouter();
  const [menu, setMenu] = useState(false);

  useEffect(() => { 
    setMenu(false)
  }, [pathname]);



  return (
    <header>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="fs-22 fw-600">Arun</Link>
        </div>

        <div className={`menu-wrapper ${menu ? "show" : ""}`}>
          <div className="show-menu flex items-center gap-x-50">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/">Features</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="right flex items-center gap-x-7">
              <Link href="/signin" className="btn" >Sign in</Link>
              <Link href="/signup" className="btn signup-btn mr-20" >Sign up</Link>
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