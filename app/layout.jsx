"use client"
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import LoadingScreen from '@/app/loading.js';
import AdventureDashboard from '@/components/AdventureDashboard';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [showAdventure, setShowAdventure] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="relative overflow-hidden">
            <div className="fixed top-0 inset-x-0 h-screen z-[-10]">
              <img
                src="https://i.ibb.co/KFvWZc6/Untitled-design-1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <Nav />
              <div>{children}</div>
              <Hero />
              <Skills />
              <Projects />
              <Footer />
            </div>

            <button
              onClick={() => setShowAdventure(true)}
              className="fixed bottom-8 right-8 z-40 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-slate-900 to-gray-900 p-4 rounded-full border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                  ?
                </span>
              </div>
              <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg border border-cyan-500/50">
                  Discover the Unknown
                </div>
              </div>
            </button>

            {showAdventure && <AdventureDashboard onClose={() => setShowAdventure(false)} />}
          </div>
        )}
      </body>
    </html>
  );
}
