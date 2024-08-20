import React from 'react';
import facebook_icon from '../assets/facebook_icon.png';
import twitter_icon from '../assets/twitter_icon.png';
import youtube_icon from '../assets/youtube_icon.png';
import instagram_icon from '../assets/instagram_icon.png';


const Footer = () => {
  return (
    <div className='footer p-20'>
      <div className="footer-icon flex gap-3">
        <img src={facebook_icon} alt="icon" className='w-5 h-5' /><img src={twitter_icon} alt="icon" className='w-5 h-5' /><img src={youtube_icon} alt="icon" className='w-5 h-5' /><img src={instagram_icon} alt="icon" className='w-5 h-5' />
      </div>
      <ul className='grid grid-cols-4 mt-5 text-gray-400'>
        <li className='hover:text-white'>Audio Description</li>
        <li className='hover:text-white'>Help Center</li>
        <li className='hover:text-white'>Gift Cards</li>
        <li className='hover:text-white'>Media Center</li>
        <li className='hover:text-white'>Investor Relations</li>
        <li className='hover:text-white'>Jobs</li>
        <li className='hover:text-white'>Terms & Use</li>
        <li className='hover:text-white'>Privacy</li>
        <li className='hover:text-white'>Legal Notices</li>
        <li className='hover:text-white'>Cookie Preferences</li>
        <li className='hover:text-white'>Corparate Information</li>
        <li className='hover:text-white'>Contact Us</li>
      </ul>
      <p className='copyright-text mt-5 text-gray-400'>@ 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer