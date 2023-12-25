"use client"
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import LoadingScreen from '@/app/loading.js';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Display loading screen for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="relative overflow-hidden">
            {/* Fixed background image */}
            <div className="fixed top-0 inset-x-0 h-screen z-[-10]">
              <img
                src="https://i.ibb.co/KFvWZc6/Untitled-design-1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Other components */}
            <div className="relative z-10">
              <Nav />
              <div>{children}</div>
              <Hero />
              <Skills />
              <Projects />
              <Footer />
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
