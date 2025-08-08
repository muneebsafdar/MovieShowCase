import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './movieCard.jsx'

function WatchList() {

    const WatchList=useSelector(state => state.movie.WatchList)
    
    console.log(WatchList);
    
    return (
        <div className='w-full h-vh scroll-bar-hidden overflow-y-scroll'>
           <div className='w-full flex justify-between items-center px-10 py-5'>

             <h1 className='text-3xl font-Gothic font-bold px-4'>Watch List</h1>

           </div>
            <div className='w-full px-4 py-2   flex justify-center flex-wrap overflow-x-scroll overflow-y-scroll  scroll-bar-hidden gap-5 text-white'>
                {
                    WatchList && WatchList.map((movie,index)=>(
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

export default WatchList
