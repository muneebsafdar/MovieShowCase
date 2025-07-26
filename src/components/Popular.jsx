import React from 'react'
import movieService from '../MovieService/MovieService';
import { useState,useEffect } from 'react';
import DropDown from './dropDown';
import MovieCard from './movieCard';
import InfiniteScroll from 'react-infinite-scroll-component';


function Popular() {

    const [Popular, setPopular] = useState([]);
    const [category,setCategory] =useState("all")
    const [total_pages,setTotalPages]=useState(1000)

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const getTrendingData = async () => {
        console.log('hello');
        const data = await movieService.GettingPopular(category,page);
        
        console.log(data);
        

        if (data) {
        setPopular((prev) => [...prev, ...data]);
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
    if (category) {
        
        getTrendingData();
    }
  }, [category]);


    return (
        <div id="scrollableDiv" className='w-full h-screen overflow-y-scroll '>
           <div className='w-full flex justify-between items-center px-10 py-5'>

             <h1 className='text-3xl font-Gothic font-bold px-4'>Popular</h1>
             <DropDown  options={['all','movie','tv']} CategorySetter={setCategory}/>

           </div>

            <InfiniteScroll
                dataLength={Popular.length}
                next={getTrendingData}
                hasMore={hasMore}
                loader={<h4 className="text-white text-center">Loading...</h4>}
                endMessage={<p className="text-white text-center">No more movies to display.</p>}
                scrollableTarget="scrollableDiv"
            >
                <div className="w-full px-4 py-2 flex justify-center flex-wrap gap-5 text-white">
                {Popular.map((movie, index) => (
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

export default Popular
