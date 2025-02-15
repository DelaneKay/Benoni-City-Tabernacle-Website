import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../homepage/sections/Navigation/Navigation'
import Footer from '../homepage/sections/Footer/Footer'

const RootLayout = () => {
  return (
    <>
      <header>
        <Navigation/> {/* This will ensure the Navbar is visible on all pages */}
      </header>
      <main>
        <Outlet /> {/* This renders the current page's content */}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default RootLayout
