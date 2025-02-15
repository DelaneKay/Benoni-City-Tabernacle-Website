import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../homepage/sections/Navigation/Navigation';
import Footer from '../homepage/sections/Footer/Footer';

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for assets to load
    setTimeout(() => {
      setLoading(false);
    }, 15000); // 2 seconds loading delay
  }, []);

  return (
    <>
      {loading ? (
        // Preloader UI
        <div className="preloader">
          <h2>Loading...</h2>
        </div>
      ) : (
        // Website Content
        <>
          <header>
            <Navigation /> {/* Navbar visible on all pages */}
          </header>
          <main>
            <Outlet /> {/* Renders the current page's content */}
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default RootLayout;
