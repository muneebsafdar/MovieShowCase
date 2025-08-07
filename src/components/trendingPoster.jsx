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
            className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
            style={{
              backgroundImage: `
                linear-gradient(
                    to right, 
                    rgba(0,0,0,0.9) 0%, 
                    rgba(0,0,0,0.8) 40%, 
                    rgba(0,0,0,0.6) 70%, 
                    rgba(0,0,0,0.3) 90%, 
                    rgba(0,0,0,0) 100%
                ),
                url(https://image.tmdb.org/t/p/original/${poster.poster_path})
              `,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
          > 

          <div className='w-full sm:w-[70%] lg:w-[50%] px-4 sm:pl-6 lg:pl-10 text-white py-6 sm:ml-[7%] sm:mt-[7%] sm:mb-[7%] flex flex-col justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold font-Gothic mb-2 leading-tight'>{poster.title || poster.original_name || poster.original_title}</h1>
            <p className='mb-2 text-sm sm:text-base line-clamp-3 sm:line-clamp-none'>{poster?.overview && poster.overview.slice(0, 150)}... <Link className='text-blue-500' to={"/"}>read more</Link></p> 
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-2'>
              <p className='inline-block text-sm sm:text-base'><i className="ri-megaphone-fill text-yellow-400 mr-1"></i>{poster.release_date || poster.first_air_date}</p>
              <p className='inline-block text-sm sm:text-base sm:ml-10 uppercase'><i className="ri-movie-2-fill text-yellow-400 mr-1"></i>{poster.media_type}</p>
            </div>
            <button className='px-3 py-2 bg-violet-700 font-bold block mb-2 text-sm sm:text-base w-fit rounded hover:bg-violet-600 transition-colors' ><i className="ri-play-mini-fill text-white mr-1"></i> Watch Trailer</button>
          </div>

          </div>

      ) : (
        <div className="text-white text-center py-8 min-h-[200px] flex items-center justify-center">
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
}

export default TrendingPoster;