import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import Search from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_icon from '../assets/profile_img.png';
import carlet_icon from '../assets/caret_icon.svg';


const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('bg-gradient-180-black');
      }
      else {
        navRef.current.classList.remove('bg-gradient-180-black');
      }
    })
  }, [])

  return (
    <nav ref={navRef} className='navbar flex w-full py-8 px-7 bg-transparent justify-between items-center fixed text-base text-Navbar_Color z-10 cursor-pointer'>
      <div className="navbar-left flex items-center gap-10">
        <img src={logo} alt="logo" className='w-36 h-9' />
        <ul className='flex items-center gap-5 text-base font-light'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right flex gap-5 items-center">
        <img src={Search} alt="search" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell" className='icons' />
        <div className="navbar-profile flex items-center gap-3 relative group">
          <img src={profile_icon} alt="bell" className='profile rounded-md' />
          <img src={carlet_icon} alt="bell" className='icons' />
          <div className="dropdown absolute right-0 px-5 py-3 rounded-md bg-Dark m-3 z-10 w-fit top-full border-2 border-slate-700 underline underline-offset-2 hidden group-hover:block">
            <p className='text-xs cursor-pointer whitespace-nowrap'>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar