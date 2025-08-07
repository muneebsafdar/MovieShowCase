import React, { useEffect, useState } from 'react'
import movieService from '../MovieService/MovieService'

function HeaderNav() {
    
    const [SearchData,setSearchData] = useState("")
    const [debounce,setDebounce]=useState("")
    const [fetchedData,setFetchedData]=useState("")

    const GetDataFromService = async ()=>{
        const data = await movieService.GetMovieOnSearch(debounce)
        setFetchedData(data)
        console.log(data);
        
    }

    useEffect(()=>{
        if (debounce) {
            GetDataFromService()
        }
    },[debounce])

    useEffect(()=>{
        let Interval=''
        if (setSearchData) {
            Interval=setTimeout(()=>{
                setDebounce(SearchData)
            },1000)
        }

     return () => {
       clearTimeout(Interval)
    }
    },[SearchData])
    

    return (
        <header className="relative px-3 sm:px-6 flex items-center pb-4 justify-center backdrop-blur-md bg-white/5 w-full shadow-sm z-50">
        <div className='relative bg-neutral-800 w-full sm:w-[80%] lg:w-[60%] rounded-2xl px-3 sm:px-6 lg:px-10 py-2 flex justify-around items-center z-10 mt-2'>
        <i className="w-[5%] text-lg sm:text-xl ri-search-line flex-shrink-0"></i>
        <input
            type="text"
            value={SearchData}
            onInput={(e)=>setSearchData(e.target.value)}
            placeholder="Search for movies..."
            className="w-[85%] sm:w-[90%] px-2 sm:px-4 py-2 rounded-lg text-sm placeholder:text-neutral-400 outline-0 bg-transparent text-white"
        />
        <i className="w-[5%] text-lg sm:text-xl ri-close-fill flex-shrink-0 cursor-pointer hover:text-gray-300"
        onClick={()=>setSearchData("")}
        ></i>
        </div>

          {/* {Search results} */}

        {SearchData && fetchedData && 
        <div className='absolute max-h-[50vh] bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600 flex flex-col w-[95%] sm:w-[70%] lg:w-[50%] top-14 sm:top-16 overflow-y-scroll scroll-bar-hidden rounded-xl p-1'>


            {fetchedData && fetchedData.map((movie,index)=>(
                <div 
                key={index}
                className='flex items-center w-full text-sm sm:text-lg lg:text-xl text-white mb-1 bg-neutral-900/80 backdrop-blur-sm p-2 rounded-lg shadow-md hover:bg-neutral-900/400 cursor-pointer'>
                    <img className='size-8 sm:size-10 flex-shrink-0 rounded object-cover' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                    <p className='pl-3 sm:pl-5 font-bold uppercase truncate'>
                        {movie.original_name || movie.original_title}
                        {' '}(
                            {movie.release_date
                            ? movie.release_date.split("-")[0]
                            : movie.first_air_date
                            ? movie.first_air_date.split("-")[0]
                            : "N/A"})
                    </p>

                </div>
            ))}
           
        </div>
          }
        
        </header>
    )
}

export default HeaderNav