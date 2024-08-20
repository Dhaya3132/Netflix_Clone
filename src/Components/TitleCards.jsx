import React, { useEffect, useRef } from 'react';
import CardsData from '../assets/cards/Cards_data';
const TitleCards = ({title,category}) => {
  const useScroll = useRef();
  const handleEffect = (event) => { event.preventDefault(); useScroll.current.scrollLeft += event.deltaY; }
  useEffect(() => { useScroll.current.addEventListener('wheel', handleEffect);})
  return (
    <div className='titleCards mt-5 mb-6'>
      <h2 className='font-semibold text-xl'>{title ? title : 'Popular on Netflix'}</h2>
      <div className='flex mt-5 gap-4 overflow-x-scroll no-scrollbar' ref={useScroll}>
        {CardsData.map((card) => (
          <div className='movie_card flex-shrink-0 relative'>
            <img src={card.image} alt="cardImage" className='w-60 h-40 rounded-md' />
            <p className='absolute bottom-4 right-2 font-medium'>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards;