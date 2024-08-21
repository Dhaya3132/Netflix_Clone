import React, { useEffect, useRef, useState } from 'react';
// import CardsData from '../assets/cards/Cards_data';
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const useScroll = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: ''
    }
  };

  const handleEffect = (event) => { event.preventDefault(); useScroll.current.scrollLeft += event.deltaY; }

  useEffect(() => {
    fetch(``, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    useScroll.current.addEventListener('wheel', handleEffect);
  }, [])

  return (
    <div className='titleCards mt-5 mb-6'>
      <h2 className='font-semibold text-xl'>{title ? title : 'Popular on Netflix'}</h2>
      <div className='flex mt-5 gap-4 overflow-x-scroll no-scrollbar' ref={useScroll}>
        {apiData.map((card) => (
          <div className='movie_card flex-shrink-0 relative'>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="cardImage" className='w-60 h-40 rounded-md' />
            <p className='absolute bottom-4 right-2 font-medium'>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards;