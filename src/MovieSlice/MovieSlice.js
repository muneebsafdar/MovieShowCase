import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState={
    WatchList:[]
}

const MovieSlice=createSlice({
    initialState,
    name:"MovieSlice",
    reducers:{
        setInLocal:(state,action)=>{
            
            if (action.payload && state.WatchList) {
                const exist = state.WatchList.some(movie => movie.id === action.payload.id)
                
                if (!exist ) {
                    state.WatchList.push(action.payload);
                    console.log(state.WatchList);
                    localStorage.setItem("WatchList",JSON.stringify(state.WatchList))
                    toast.success("Added to WatchList Successfully")

                }else{
                    toast.info("Already exist in WatchList")
                }
            }
        },
        getFromLocal:(state)=>{
            const data=JSON.parse(localStorage.getItem("WatchList"))|| []
            state.WatchList.length=0;
            state.WatchList.push(...data)
        },
        RemoveFromWatchLater:(state,action)=>{
            state.WatchList=state.WatchList.filter(movie=> movie.id !== action.payload.id )
            localStorage.setItem("WatchList",JSON.stringify(state.WatchList))
            toast.success("Remove from WatchList Successfully")
        }
    }
})

const MovieReducer=MovieSlice.reducer

export const {getFromLocal,setInLocal,RemoveFromWatchLater} = MovieSlice.actions

export default MovieReducer