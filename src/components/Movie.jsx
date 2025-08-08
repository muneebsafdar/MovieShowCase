import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './movieCard.jsx';
import movieService from '../MovieService/MovieService.js';

function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovieData = async () => {
    
    
    const data = await movieService.GettingMovies(page);

    if (data && data.results) {
      setMovies((prev) => [...prev, ...data.results]);

      // Stop fetching if no more pages
      if (page >= data.total_pages) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    getMovieData(); // Load first page
  }, []);

  return (
    <div id="scrollableDiv" className="w-full h-screen overflow-y-scroll">
      <div className='w-full flex justify-between items-center px-10 py-5'>
        <h1 className='text-3xl font-Gothic font-bold px-4'>Movies</h1>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={getMovieData}
        hasMore={hasMore}
        loader={<h4 className="text-white text-center">Loading...</h4>}
        endMessage={<p className="text-white text-center">No more movies to display.</p>}
        scrollableTarget="scrollableDiv"
      >
        <div className='w-full px-4 py-2 flex justify-center flex-wrap gap-5 text-white'>
          {movies.map((movie, index) => (
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
  );
}

export default Movie;
