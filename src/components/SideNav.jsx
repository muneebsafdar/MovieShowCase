import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from './Logo'; // Make sure your Logo component is correctly imported

function SideNav({ children }) {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-950 text-white font-sans relative">

      {/* Hamburger Icon */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 text-white text-3xl"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <aside className={`
        ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        transition-transform duration-300 ease-in-out
        w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/5 h-screen min-w-[200px] 
        bg-gradient-to-b from-neutral-900 to-neutral-800 
        p-2 shadow-lg border-r border-neutral-700 
        fixed lg:static z-40
      `}>
        <h1 className="text-3xl font-Gothic font-bold mb-5 tracking-wide mx-2">
          <Logo />M TV
        </h1>

        <div className="mb-4 pl-1">
          <h2 className="text-xl text-white uppercase font-semibold px-2 mb-2">News Feed</h2>
          <nav className="space-y-2 pl-6">
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
              onClick={() => { navigate("trending"); setShowSidebar(false); }}>
              Trending
            </button>
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
              onClick={() => { navigate("popular"); setShowSidebar(false); }}>
              Popular
            </button>
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
              onClick={() => { navigate("movies"); setShowSidebar(false); }}>
              Movies
            </button>
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
              onClick={() => { navigate("tv"); setShowSidebar(false); }}>
              TV Shows
            </button>
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
            onClick={()=>navigate('watch-list')}
            >
              Watch List
            </button>
          </nav>
        </div>

        <hr className='mb-3 text-slate-400' />

        {/* Website Info Section */}
        <div className='pl-1'>
          <h2 className="text-xl text-white uppercase font-semibold px-2 mb-2">Website Info</h2>
          <nav className="space-y-2 pl-6">
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
              onClick={() => { navigate("about"); setShowSidebar(false); }}>
              About
            </button>
            <button className="block w-full text-left py-1.5 px-3 rounded-lg hover:bg-neutral-700 transition"
              onClick={() => { navigate("contact"); setShowSidebar(false); }}>
              Contact Us
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}

    </div>
  );
}

export default SideNav;
