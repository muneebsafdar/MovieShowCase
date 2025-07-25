import React from 'react'
import { useState,useEffect } from 'react';
import DropDown from './dropDown';
import MovieCard from './movieCard';
import movieService from '../MovieService/MovieService';


function Trending() {

    const [trending, setTrending] = useState("");
    const [category,setCategory] =useState("all")

    const getTrendingData = async () => {
        const data = await movieService.GetTrendingForPoster(category);
        setTrending(data);
        };

  useEffect(() => {
    getTrendingData();
  }, [category]);

    return (
        <div className='w-full h-vh scroll-bar-hidden overflow-y-scroll'>
           <div className='w-full flex justify-between items-center px-10 py-5'>

             <h1 className='text-3xl font-Gothic font-bold px-4'>Trending</h1>
             <DropDown  options={['all','movie','tv']} CategorySetter={setCategory}/>

           </div>
            <div className='w-full px-4 py-2   flex justify-center flex-wrap overflow-x-scroll overflow-y-scroll  scroll-bar-hidden gap-5 text-white'>
                {
                    trending && trending.map((movie,index)=>(
                    <MovieCard
                        movie={movie}
                        index={index}
                        key={index}
                        className="lg:w-[200px] w-[160px]" // fixed width instead of max-w-[20%]
                    />
                ))}
            </div>
           
        </div>
           
    )
}

export default Trending
