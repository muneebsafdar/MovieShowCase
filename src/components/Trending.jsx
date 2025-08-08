import React from 'react'
import { useState,useEffect } from 'react';
import DropDown from './dropDown.jsx';
import MovieCard from './movieCard.jsx';
import movieService from '../MovieService/MovieService.js';
import InfiniteScroll from 'react-infinite-scroll-component';



function Trending() {

    const [trending, setTrending] = useState([]);
    const [category,setCategory] =useState("all")

     
    const [total_pages,setTotalPages]=useState(1000)
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    const getTrendingData = async () => {
        const data = await movieService.GetTrendingForPoster(category);
        if (data) {
        setTrending((prev) => [...prev, ...data]);
        console.log("data is avauoabe");
        

        // Stop fetching if no more pages
        if (page >= total_pages) {
            setHasMore(false);
            console.log("set more");
        } else {
            setPage((prev) => prev + 1);
        }
    }
        };

  useEffect(() => {
    setTrending([])
    getTrendingData();
  }, [category]);

    return (
        <div id="scrollableDiv" className='w-full h-screen overflow-y-scroll'>
           <div className='w-full flex justify-between items-center px-10 py-5'>

             <h1 className='text-3xl font-Gothic font-bold px-4'>Trending</h1>
             <DropDown  options={['all','movie','tv']} CategorySetter={setCategory}/>

           </div>
             <InfiniteScroll
                dataLength={trending.length}
                next={getTrendingData}
                hasMore={hasMore}
                loader={<h4 className="text-white text-center">Loading...</h4>}
                endMessage={<p className="text-white text-center">No more movies to display.</p>}
                scrollableTarget="scrollableDiv"
            >
                <div className="w-full px-4 py-2 flex justify-center flex-wrap gap-5 text-white">
                {trending.map((movie, index) => (
                    <MovieCard
                    movie={movie}
                    index={index}
                    key={index}
                    className="lg:w-[200px] w-[160px]"
                    />
                ))}
                </div>
            </InfiniteScroll>
           
        </div>
           
    )
}

export default Trending
