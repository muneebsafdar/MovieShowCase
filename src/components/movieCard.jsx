import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setInLocal,RemoveFromWatchLater } from "../MovieSlice/MovieSlice";
import { toast } from "react-toastify";


function MovieCard({ movie, index, className = '' }) {


  const dispatch=useDispatch()

  const AddToWatchlist=()=>{
    dispatch(setInLocal(
      { id:movie.id,
        poster_path:movie.poster_path,
        name:(movie.name || movie.title || movie.original_name || movie.original_title),
        overview:movie.overview,
        status:"watchList"
      }))

  }

  const removeFromWatchList=()=>{
    dispatch(RemoveFromWatchLater(movie))
  }

  return (
    <div
      key={movie.id}
      className={`flex flex-col text-justify bg-black ${className} relative shadow-white shadow-md rounded overflow-hidden`}
    >
      {
      movie.status &&  <div className="absolute top-3 right-3 rounded-full bg-white" onClick={removeFromWatchList}> 
       <i class="ri-heart-fill object-cover p-1 text-xl text-red-600 hover:text-red-600"></i>
      </div>
      }

      {
      !movie.status &&  <div className="absolute top-3 right-3 rounded-full bg-white" onClick={AddToWatchlist}> 
       <i class="ri-heart-line object-cover p-1 text-xl text-red-600 hover:text-red-600"></i>
      </div>
      }

      


      {/* Image */}
      <div className="w-full aspect-[3/3]">
        <img
          className="w-full  object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie poster"
        />
      </div>

      {/* Title */}
      <h1 className="font-bold mb-1 px-2 mt-2 text-base">
        {movie.name || movie.title || movie.original_name || movie.original_title}
      </h1>

      {/* Description */}
      <p className="text-sm p-2 text-gray-400">
        {movie?.overview?.slice(0, 100)}...{' '}
        <Link className="text-gray-500" to="/">
          more
        </Link>
      </p>
    </div>
  );
}

export default MovieCard