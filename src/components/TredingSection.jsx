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
           <div className='flex justify-between items-center py-2'>
            <h1 className='text-xl text-white font-bold inline-block'>Trending</h1>
            <DropDown  options={['all','movie','tv']} CategorySetter={setCategory}/>
           </div>
            {
            trending ? (<div className='overflow-hidden flex gap-3 over overflow-x-scroll py-10 px-10 scroll-bar-hidden'>
                {trending.map((movie,index)=>(
                    <MovieCard movie={movie} index={index} key={index} className="min-w-[150px] max-w-[150px]" />
                ))}
            </div>)
            :  <h1>Loading</h1> 
            }
        </>
    )   
}

export default TredingSection
