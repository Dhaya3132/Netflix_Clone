import React from 'react';
import Navbar from '../../Components/Navbar';
import hero from '../../../public/hero_banner.jpg';
import title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Components/TitleCards';
import Footer from '../../Components/Footer';
const HomePage = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero_section relative">
        <img src={hero} alt="hero" className='w-full' />
        <div className='absolute left-20 top-36'>
          <img src={title} alt="hero title" />
          <p className='text-black font-light text-lg py-3 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur itaque sunt velit nostrum ipsam, molestias, quisquam quam quo ipsa, porro impedit eveniet labore magnam sed maiores mollitia dolores error.</p>
          <div className='hero_btns flex items-center gap-5'>
            <button className='bg-white text-black flex gap-3 items-center w-fit px-5 py-4 rounded-lg'>
              <img src={play_icon} alt="play" className='w-7 h-7' />
              Play Video
            </button>
            <button className='text-white flex gap-3 items-center w-fit px-5 py-4 rounded-lg bg-Dark'>
              <img src={info_icon} alt="more" className='w-7 h-7' />
              More info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards p-5">
        <TitleCards title={'Only on Netflix'} category={'popular'} />
        <TitleCards title={'Upcoming Movies'} category={'top_rated'} />
        <TitleCards title={'Top pics for you'} category={'upcoming'} />
        <TitleCards title={'Block Buster Movies'}  />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
