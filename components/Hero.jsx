

const Hero = () => {
    return (
        <div className="relative -mt-12 overflow-hidden pb-16 pt-[5.75rem]" id="about">

            <div className="relative mx-auto mt-16 grid w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
                <div
                    className="animate-pulse col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-sky-200 "
                    aria-hidden="true"
                >
                    By Rohit Ghosh and his insipration.
                </div>
                <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">

                    Elementary, my dear Watson.
                </h1>
                <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700">

                    Java and React developer with expertise in Tailwind CSS, Bootstrap, Redux, and Nextjs.
                    Passionate B.Tech graduate focused on creating user-friendly web apps and staying updated with emerging technologies.
                    Strong problem-solving skills in both front-end and back-end development.
                </p>
                <div className="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <a
                        className="transition duration-150 ease-in-out flex items-center pointer-events-auto ml-8 rounded-md bg-gradient-to-r from-blue-600 via-sky-400 to-sky-200 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-gradient-to-r hover:from-sky-200 hover:via-sky-400 hover:to-blue-600 hover:transform hover:-translate-y-1 hover:scale-110"
                        target="_blank"
                        href="https://www.linkedin.com/in/rohitghosh07/"
                    >
                        <span class="flex items-center transition-transform transition-color duration-300 transform hover:scale-110 cursor-pointer">
                            <svg
                                class="mr-2.5 h-5 w-5 flex-none stroke-slate-200"
                                xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                viewBox="0 0 512 509.64"
                            >
                                <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                                <path
                                    fill="#fff"
                                    d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                                />
                            </svg>
                            <span class="">LinkedIn</span>
                            <span aria-hidden="true" class="hidden text-slate-400 sm:inline ml-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100">→</span>
                        </span>


                    </a>
                    <a
                        className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-200 hover:bg-white/25 hover:ring-slate-900/15 "
                        href="https://github.com/RohitGhosh07" target="_blank"
                    >
                        <div class="inline-flex items-center transition-transform transition-color duration-300 transform  hover:scale-110 cursor-pointer">
                            <svg class="mr-2.5 h-5 w-5 flex-none stroke-slate-600 " xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                            </svg>
                            <span class="text-black">Github</span>
                            <span aria-hidden="true" class="hidden text-black/25 sm:inline">→</span>
                        </div>


                    </a>
                </div>
                <div className="pointer-events-none col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
                    <div className="-ml-[32rem] mt-12 h-[46.375rem] origin-top scale-[calc(204/299)] select-none sm:-ml-[24rem] sm:-mt-20 sm:h-auto sm:transform-none md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0">
                        <div className="flex justify-end">
                            <div className="relative flex items-end">
                                <div className="absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div className="absolute left-16 top-full -mt-px h-8 overflow-hidden">
                                    <div className="flex -mt-px h-[2px] w-56">
                                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-4">
                                        <div className="ml-auto pointer-events-auto h-10 w-10 rounded-full p-1   ">
                                            <svg className="fill-sky-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-backpack" viewBox="0 0 16 16">
                                                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14ZM4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4Zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5Z" />
                                                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6.002 6.002 0 0 1 4-5.659ZM7 2v.083a6.04 6.04 0 0 1 2 0V2a1 1 0 0 0-2 0Zm1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5Z" />
                                            </svg>
                                        </div>
                                        <div className="mt-8 flex items-center justify-end">
                                            <div className="pointer-events-auto h-10 w-10 rounded-full p-1   ">
                                                <svg className="fill-sky-500 animate-pulse" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
                                                    <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" />
                                                </svg>
                                            </div>
                                            <a target="_blank" href="https://www.instagram.com/rohit_lone/">
                                            <div className="transition duration-150 ease-in-out flex items-center pointer-events-auto ml-8 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:transform hover:-translate-y-1 hover:scale-110">
                                                instagram
                                            </div>
                                            </a>
                                        </div>
                                </div>
                                <div className="relative z-10 p-4 text-right">
                                    <div className="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                    <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                    <div className="absolute inset-0 -right-px bg-gradient-to-br from-white/0 via-white/25 to-white/0"></div>
                                    <div className="pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900">
                                        <div className="flex px-3 py-2">
                                            <svg className="mr-2.5 h-5 w-5 flex-none fill-slate-400">
                                                <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                                            </svg>
                                            Projects
                                        </div>
                                        <div className="border-l border-slate-400/20 px-2.5 py-2">
                                            24
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 p-4">
                                <div className="absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div className="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div className="absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden">
                                    <div className="flex -mb-px h-[2px] w-56">
                                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    </div>
                                </div>
                                <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                                    <img
                                        src="https://i.ibb.co/LYxCpPC/babughat-me.webp"
                                        alt=""
                                        className="rounded-lg shadow-lg object-cover "
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end" >
                        <div className="relative z-10 p-4">
                            <div className="flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10" >
                                <div className="flex items-center space-x-4 px-6 py-4">
                                    <svg className="h-6 w-6 flex-none" fill="none">
                                        <path
                                            d="M6.22 11.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 6.75l-.53-.53a.75.75 0 0 0 0 1.06L3 6.75Zm4.28-3.22a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.5 18a.75.75 0 0 0 0 1.5V18ZM7.28 9.97 3.53 6.22 2.47 7.28l3.75 3.75 1.06-1.06ZM3.53 7.28l3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm16.72 5.47c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM15 7.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 15 6v1.5ZM15 6H3v1.5h12V6Zm0 12h-1.5v1.5H15V18Z"
                                            fill="#64748B"
                                        ></path>
                                        <path
                                            d="M3 15.75h.75V21"
                                            stroke="#64748B"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M9 16.5A.75.75 0 0 0 9 15v1.5Zm-2.25-.75V15a.75.75 0 0 0-.75.75h.75Zm0 2.25H6c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5ZM9 15H6.75v1.5H9V15Zm-3 .75V18h1.5v-2.25H6Zm.75 3h1.5v-1.5h-1.5v1.5Zm1.5 1.5h-1.5v1.5h1.5v-1.5ZM9 19.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25H9Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z"
                                            fill="#64748B"
                                        ></path>
                                    </svg>
                                    <svg className="h-10 w-10 flex-none" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#0F172A"></circle>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.5 13.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L16.28 27.99c-1.25.687-2.779-.217-2.779-1.643V13.653Z"
                                            fill="#fff"
                                        ></path>
                                    </svg>
                                    <svg className="h-6 w-6 flex-none" fill="none">
                                        <path
                                            d="M16.72 9.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21 6.75l.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-3.22-4.28a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM10.5 19.5a.75.75 0 0 0 0-1.5v1.5Zm3.75-4.5a.75.75 0 0 0 0 1.5V15Zm.75.75h.75A.75.75 0 0 0 15 15v.75ZM14.25 21a.75.75 0 0 0 1.5 0h-1.5Zm6-4.5a.75.75 0 0 0 0-1.5v1.5ZM18 15.75V15a.75.75 0 0 0-.75.75H18ZM18 18h-.75c0 .414.336.75.75.75V18Zm0 2.25a.75.75 0 0 0 0 1.5v-1.5Zm-.22-9.22 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06Zm3.75-4.81-3.75-3.75-1.06 1.06 3.75 3.75 1.06-1.06ZM2.25 12.75A6.75 6.75 0 0 0 9 19.5V18a5.25 5.25 0 0 1-5.25-5.25h-1.5ZM9 6a6.75 6.75 0 0 0-6.75 6.75h1.5C3.75 9.85 6.1 7.5 9 7.5V6Zm0 1.5h12V6H9v1.5Zm0 12h1.5V18H9v1.5Zm5.25-3H15V15h-.75v1.5Zm0-.75V21h1.5v-5.25h-1.5Zm6-.75H18v1.5h2.25V15Zm-3 .75V18h1.5v-2.25h-1.5Zm.75 3h1.5v-1.5H18v1.5Zm1.5 1.5H18v1.5h1.5v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Z"
                                            fill="#64748B"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="flex flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem] leading-5 text-slate-700">
                                    <div>00:51</div>
                                    <div className="ml-4 flex flex-auto rounded-full bg-slate-100">
                                        <div className="h-2 w-1/3 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600"></div>
                                        <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600"></div>
                                    </div>
                                    <div className="ml-4">55:43</div>
                                    <svg className="ml-6 h-6 w-6 flex-none" fill="none">
                                        <path
                                            d="M14 5 9 9H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4V5Z"
                                            fill="#64748B"
                                            stroke="#64748B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M19 12c0-1.5-1-2-1-2v4s1-.5 1-2Z"
                                            stroke="#64748B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    <svg className="ml-6 h-6 w-6 flex-none" fill="none">
                                        <path
                                            d="M12 8v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1V8Zm0 0V7a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 12v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1ZM12 16v1a1 1 0 0 0 1-1h-1Zm0 0h-1a1 1 0 0 0 1 1v-1Zm0 0v-1a1 1 0 0 0-1 1h1Zm0 0h1a1 1 0 0 0-1-1v1Z"
                                            fill="#64748B"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div >
    );
};

export default Hero;
