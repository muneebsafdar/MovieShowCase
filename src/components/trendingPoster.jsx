import React, { useEffect, useState } from 'react';
import movieService from '../MovieService/MovieService';
import { Link } from 'react-router-dom';

function TrendingPoster() {
  const [poster, setPoster] = useState(1);

  const getPosterData = async () => {
    const data = await movieService.GetTrendingForPoster();
    const random = Math.floor(Math.random() * data.length);
    setPoster(data[random]);
    console.log(data[random]);
    
  };

  useEffect(() => {
    getPosterData();
  }, []);

  return (
    <>
      {poster ? (
          <div
            className="w-full"
            style={{
              backgroundImage: `
                linear-gradient(
                    to right, 
                    rgba(0,0,0,0.9) 0%, 
                    rgba(0,0,0,0.6) 60%, 
                    rgba(0,0,0,0.2) 90%, 
                    rgba(0,0,0,0) 100%
                ),
                url(https://image.tmdb.org/t/p/original/${poster.poster_path})
              `,
                backgroundSize: 'cover', // scale width to 80% and auto height
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
          > 

          <div className='w-[50%] pl-10 text-white ml-[7%] mt-[7%] mb-[7%] '>
            <h1 className='text-3xl  font-bold font-Gothic mb-2'>{poster.title || poster.original_name || poster.original_title}</h1>
            <p className='mb-2'>{poster?.overview && poster.overview.slice(0, 200)}... <Link className='text-blue-500' to={"/"}>read more</Link></p> 
            <p className='inline-block  mb-2'><i class="ri-megaphone-fill text-yellow-400 "></i>{poster.release_date || poster.first_air_date}</p>
            <p className='inline-block  mb-2  ml-10 uppercase'><i class="ri-movie-2-fill text-yellow-400 "></i>{poster.media_type}</p>
            <button className='px-3 py-2 bg-violet-700 font-bold block mb-2' ><i class="ri-play-mini-fill text-white"></i> Watch Trailer</button>
          </div>

          </div>

      ) : (
        <h1 className="text-white">Loading</h1>
      )}
    </>
  );
}

export default TrendingPoster;



// 