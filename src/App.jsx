import React,{ useState } from 'react'
import './App.css'
import SideNav from './components/SideNav';
import HeaderNav from './components/HeaderNav';
import MainScreen from './components/MainScreen';
import TrendingPoster from './components/trendingPoster';
import { Outlet, useLocation } from 'react-router-dom';
import TredingSection from './components/TredingSection'
import { useDispatch } from 'react-redux';
import { getFromLocal } from './MovieSlice/MovieSlice';



function App() {

  const dispatch=useDispatch()
  dispatch(getFromLocal())
  const path=useLocation()

  

   return (

    <>

     <div className="flex h-vh w-full bg-neutral-950 text-white font-sans">
      {/* Left fixed side nav */}
      <div className="top-0 h-vh">
        <SideNav />
      </div>

      {/* Right scrollable content */}
      <div className="flex-1 h-dvh overflow-y-auto scroll-bar-hidden">
        {
          path.pathname === "/" ? (
            <div className="flex flex-col">
              <HeaderNav />
              <TrendingPoster />
              <MainScreen children={<TredingSection />} />
            </div>
          ) : (
            <Outlet />
          )
        }
      </div>
  </div>

        
    </>
   
  );
}

export default App
