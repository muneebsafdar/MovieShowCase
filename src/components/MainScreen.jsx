import React from 'react'

function MainScreen({children}) {
    return (
        <main className="overflow-x-scroll w-full  overflow-y-scroll p-6 bg-gradient-to-b scroll-bar-hidden from-neutral-900 via-neutral-950 to-black">
          {children}
        </main>

    )
}

export default MainScreen
