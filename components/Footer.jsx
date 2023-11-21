import React from "react";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8" id="contact">
      <div className="border-t border-slate-900/5 py-10 text-center"> {/* Center the text */}
        <p className="text-lg font-bold text-slate-700 justify-between">Contact me</p>
        <p className="mt-5 text-sm leading-6 text-slate-500">
          © 2023: Made with 90% code, 5% coffee stains,5% tea stains and 100% determination.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a
            href="mailto:rohitghosh.works@gmail.com"
            className="transition duration-300 ease-in-out hover:text-blue-500"
          >
            rohitghosh.works@gmail.com
          </a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a
            href="https://www.linkedin.com/in/rohitghosh07"
            className="transition duration-300 ease-in-out hover:text-blue-500"
          >
            Linkedin
          </a>
        </div>

      </div>
    </footer>

  );
};

export default Footer;
