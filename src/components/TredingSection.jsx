import React, { useEffect, useState } from 'react'
import movieService from '../MovieService/MovieService'
import MovieCard from './movieCard'
import DropDown from './dropDown'

function TredingSection() {


    const [trending ,setTrending]=useState()
    const [category,setCategory]=useState("all");

    const getTrendingMovies= async ()=>{
        console.log(category);
        
        const data = await movieService.GetTrendingForPoster(category.toLowerCase())
        setTrending(data)
    }
    useEffect(()=>{
        getTrendingMovies()
    },[category])


    return (
        <>
           <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center justify-start items-start py-2 gap-2 sm:gap-0'>
            <h1 className='text-lg sm:text-xl text-white font-bold inline-block'>Trending</h1>
            <DropDown  options={['all','movie','tv']} CategorySetter={setCategory}/>
           </div>
            {
            trending ? (<div className='overflow-hidden flex gap-2 sm:gap-3 overflow-x-scroll py-4 sm:py-10 px-2 sm:px-10 scroll-bar-hidden'>
                {trending.map((movie,index)=>(
                    <MovieCard movie={movie} index={index} key={index} className="min-w-[120px] max-w-[120px] sm:min-w-[150px] sm:max-w-[150px]" />
                ))}
            </div>)
            :  <h1 className="text-white text-center py-8">Loading</h1> 
            }
        </>
    )   
}

export default TredingSection