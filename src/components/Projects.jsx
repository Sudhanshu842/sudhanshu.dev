import React from 'react'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Netflix Clone - Frontend',
            info: 'basic react netflix clone using tailwind css react router and axios api ',
            span:'xl:col-span-2',
            src: "bg-[url('/src/assets/netflix-clone.png')] bg-cover bg-center",
            info_margin:'mt-20',
            button_margin:'mt-16',
        },
        {
            id: 2,
            title: 'Simplest React Calculator',
            info: 'simple calculator using react hooks',
            span:'xl:col-span-1',
            src: "bg-[url('/src/assets/simple-calculator.png')] bg-cover bg-center",
            info_margin:'mt-10',
            button_margin:'mt-8',
        },
        {
            id: 3,
            title: 'Dropdown Menu',
            info: 'simlpe dropdown menu using react hooks',
            span:'xl:col-span-1',
            src: "bg-[url('/src/assets/simple-dropdown.png')] bg-cover bg-center",
            info_margin:'mt-10',
            button_margin:'mt-8',
        },
        {
            id: 4,
            title: 'Little Lemon App',
            info: 'react native app using native wind css',
            span:'xl:col-span-1',
            src: "bg-[url('/src/assets/little-lemon.png')] bg-cover bg-center",
            info_margin:'mt-10',
            button_margin:'mt-8',
        },
        {
            id: 5,
            title: 'Portfolio-Template',
            info: 'react portfolio template using tailwind css react router & hooks ',
            span:'xl:col-span-2',
            src: "bg-[url('/src/assets/portfolio.png')] bg-cover bg-center",
            info_margin:'mt-20',
            button_margin:'mt-16',
        },
        
        {
            id: 6,
            title: 'Robocon 2022',
            info: 'national level robotics competition',
            span:'xl:col-span-2',
            src: "bg-[url('/src/assets/robocon.jpg')] bg-cover bg-right",
            info_margin:'mt-20',
            button_margin:'mt-16',
        },

        {
            id: 7,
            title: 'Sloth Bot - Robot',
            info: 'Sloth type servo robot with distance sensor',
            span:'xl:col-span-1',
            src: "bg-[url('/src/assets/sloth-bot.jpg')] bg-cover bg-center",
            info_margin:'mt-10',
            button_margin:'mt-8',
        },
        {
            id: 8,
            title: 'Weather box',
            info: 'display local temp & humidity',
            span:'xl:col-span-1',
            src: "bg-[url('/src/assets/weather-box.jpg')] bg-cover bg-center",
            info_margin:'mt-20',
            button_margin:'mt-16',
        },
        {
            id: 9,
            title: 'Arduino pcb',
            info: 'basic Kicad design of arduino',
            span:'xl:col-span-1',
            src: "bg-[url('/src/assets/kicad.jpg')] bg-cover bg-center",
            info_margin:'mt-20',
            button_margin:'mt-16',
        },
        


    ]

    return (
        <div name="projects" className=' w-full pt-12 md:pt-28 text-gray-600 h-max'>
            <div className='px-0 md:p-4 mx-auto flex flex-col justify-center w-3/4'>
                <div className='pb-2 md:pb-8 flex flex-col items-center '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Projects
                    </p>
                    <p className='py-2'>
                        Check out some of my work right here 👇
                    </p>
                </div>

                <div className="flex items-center justify-center flex-wrap">
                    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-xs sm:text-sm  font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">React.js</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">MERN</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">React Native</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Core-Tech</button>
                </div>

                <div className='container h-[500px]  flex flex-no-wrap overflow-x-scroll bg-blend-overlay scrolling-touch gap-6 gap-y-16 items-start pt-6  rounded-md
                w-[100%]'>

                    <div className="grid grid-flow-row-dense h-[367px] grid-cols-1  xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-1 md:px-6 w-full">
                        {/* start of projects container */}

                        {projects.map(({id, title, info, src, span, button_margin, info_margin}) => (
            // eslint-disable-next-line no-useless-concat
                            <div key={id} className={'flex ' +' '+span}>
                                <div className=' rounded-2xl w-full gap-x-4'>
                                    // eslint-disable-next-line no-useless-concat
                                    <div class={" rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer " + ' ' +
                                    src}>
                                        
                                        <div class="bg-black bg-opacity-60 p-10 rounded-xl">
                                            <h1 class="mt-5 text-3xl text-gray-100 leading-snug ">{title}
                                            </h1>
                                            <div class={info_margin}>
                                                <span class="text-base">{info}</span>
                                            </div>
                                            // eslint-disable-next-line no-useless-concat
                                            <div class={" flex justify-between " + ' ' + button_margin} >
                                                <span class="p-3 pl-0 font-bold">Preview</span>
                                                <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:border-gray-200 cursor-pointer hover:text-red-500 ">github</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* end of projects container */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
