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
        <header className="relative px-6 flex items-center pb-4 justify-center backdrop-blur-md bg-white/5  w-full shadow-sm z-50">
        <div className=' relative bg-neutral-800 w-[60%] rounded-2xl px-10 py-2 flex justify-around items-center z-10 mt-2'>
        <i className=" w-[5%] text-xl ri-search-line "></i>
        <input
            type="text"
            value={SearchData}
            onInput={(e)=>setSearchData(e.target.value)}
            placeholder="Search for movies..."
            className="w-[90%] px-4 py-2 rounded-lg  text-sm placeholder:text-neutral-400 outline-0"
        />
        <i className=" w-[5%] text-xl ri-close-fill "
        onClick={()=>setSearchData("")}
        ></i>
        </div>

          {/* {Search results} */}

        {SearchData && fetchedData && 
        <div className='absolute  max-h-[50vh]  bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600 flex flex-col w-[50%] top-16 overflow-y-scroll scroll-bar-hidden rounded-xl p-1'>


            {fetchedData && fetchedData.map((movie,index)=>(
                <div 
                key={index}
                className=' flex items-center w-full text-xl text-white mb-1 bg-neutral-900/80 backdrop-blur-sm p-2 rounded-lg shadow-md hover:bg-neutral-900/400'>
                    <img className='size-10' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                    <p className='pl-5 text-xl font-bold uppercase'>
                        {movie.original_name || movie.original_title}
                        (
                            {movie.release_date
                            ? movie.release_date.split("-")[0]
                            : movie.first_air_date
                            ? movie.first_air_date.split("-")[0]
                            : "N/A"}
                        )
                    </p>

                </div>
            ))}
           
        </div>
          }
        
        </header>
    )
}

export default HeaderNav
