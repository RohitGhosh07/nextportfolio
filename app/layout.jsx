// RootLayout.js
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import "@/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
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
            <div>
              {children}
            </div>
            <Hero />
            <Skills />
            <Projects />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}


