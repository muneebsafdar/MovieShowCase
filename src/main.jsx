import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './MovieSlice/store.js'


import ContactUsPage from './pages/ContactUsPage.jsx'
import MoviesPage from './pages/MoviesPage.jsx'
import Trendingpage from './pages/Trendingpage.jsx'
import Tvshowpage from './pages/Tvshowpage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import FavouritePage from './pages/FavouritePage.jsx'
import PopularPage from './pages/FavouritePage.jsx'
import WatchListPage from './pages/WatchListPage.jsx'



const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='about' element={<AboutUsPage/>}/>
      <Route path='contact' element={<ContactUsPage/>}/>
      <Route path='movies' element={<MoviesPage/>}/>
      <Route path='trending' element={<Trendingpage/>}/>
      <Route path='tv' element={<Tvshowpage/>}/>
      <Route path='favourite' element={<FavouritePage/>}/>
      <Route path='popular' element={<PopularPage/>}/>
      <Route path='watch-list' element={<WatchListPage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer />
    </Provider>
  </StrictMode>,
)
