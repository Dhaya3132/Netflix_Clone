import React, { useState } from 'react';
import black_arrow from '../../assets/back_arrow_icon.png';
import { Link, useParams } from 'react-router-dom';

const VideoPlayer = () => {
    const [apiData,setApiData] = useState({name:'',key:'',published_at:'',type:''})
    const {id} = useParams();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: ''
        }
      };
      
      fetch(``, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
    return (
        <div className='player flex flex-col h-screen p-10'>
            <Link to='/'><img src={black_arrow} alt="" className='w-10 h-10 mb-5' /></Link>
            <iframe className='w-full rounded-md' width='80%' height='80%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen ></iframe>
            <div className="player-info flex gap-5 text-white mt-5">
                <p>Published at : {apiData.published_at.slice(0,10)}</p>
                <p>Name : {apiData.name}</p>
                <p>Type : {apiData.type}</p>
            </div>
        </div>
    )
}

export default VideoPlayer