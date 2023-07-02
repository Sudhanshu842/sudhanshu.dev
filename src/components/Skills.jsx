import React from 'react'

const Skills = () => {

    const frontend = [
        {
            id: 1,
            skills: 'HTML5',
            percentage: 'w-[80%]',
            level: '80%',
        },
        {
            id: 2,
            skills: 'CSS3',
            percentage: 'w-[60%]',
            level: '60%',
        },
        {
            id: 3,
            skills: 'Tailwind CSS',
            percentage: 'w-[70%]',
            level: '70%',
        },
        {
            id: 4,
            skills: 'Javascript',
            percentage: 'w-[50%]',
            level: '50%',
        },
        {
            id: 5,
            skills: 'React.js',
            percentage: 'w-[65%]',
            level: '65%',
        },
        {
            id: 6,
            skills: 'Bootstrap',
            percentage: 'w-[60%]',
            level: '60%',
        },
    ]

    const backend = [
        {
            id: 1,
            skills: 'Node.js',
            percentage: 'w-[60%]',
            level: '60%',
        },
        {
            id: 2,
            skills: 'Express.js',
            percentage: 'w-[50%]',
            level: '50%',
        },
        {
            id: 3,
            skills: "MongoDB",
            percentage: 'w-[75%]',
            level: '75%',
        },
        {
            id: 4,
            skills: 'Firebase',
            percentage: 'w-[40%]',
            level: '40%',
        },
        {
            id: 5,
            skills: 'Java',
            percentage: 'w-[50%]',
            level: '50%',
        },
    ]

    const hardware = [
        {
            id: 1,
            skills: 'Robotics',
            percentage: 'w-[60%]',
            level: '60%',
        },
        {
            id: 2,
            skills: 'PCB Designing - KiCad',
            percentage: 'w-[40%]',
            level: '40%',
        },
        {
            id: 3,
            skills: 'IoT, Arduino, Raspberry Pi',
            percentage: 'w-[50%]',
            level: '50%',
        },
        {
            id: 4,
            skills: 'Embedded Systems Programming',
            percentage: 'w-[30%]',
            level: '0%',
        },
        {
            id: 5,
            skills: 'Sensors and Actuators',
            percentage: 'w-[65%]',
            level: '65%',
        },
    ]
    const tools = [
        {
            id: 1,
            skills: 'VS Code',
            percentage: 'w-[80%]',
            level: '80%',
        },
        {
            id: 2,
            skills: 'Git/GitHub',
            percentage: 'w-[75%]',
            level: '75%',
        },
        {
            id: 3,
            skills: 'Linux',
            percentage: 'w-[55%]',
            level: '55%',
        },
        {
            id: 4,
            skills: 'Filmora',
            percentage: 'w-[60%]',
            level: '60%',
        },
        {
            id: 5,
            skills: 'Canva',
            percentage: 'w-[65%]',
            level: '65%',
        },
        {
            id: 6,
            skills: 'Notion',
            percentage: 'w-[70%]',
            level: '70%',
        },
    ]
    const native = [
        {
            id: 1,
            skills: 'React Native',
            percentage: 'w-[65%]',
            level: '65%',
        },
        {
            id: 2,
            skills: 'Android Studio',
            percentage: 'w-[40%]',
            level: '40%',
        },
        {
            id: 3,
            skills: 'UI/UX',
            percentage: 'w-[55%]',
            level: '55%',
        },
        {
            id: 4,
            skills: 'NativeWind',
            percentage: 'w-[60%]',
            level: '60%',
        },
        {
            id: 5,
            skills: 'RESTful APIs',
            percentage: 'w-[30%]',
            level: '30%',
        },
    ]

    return (
        <div name="skills" className='w-full h-screen  pt-28 text-gray-600 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
            <div className=' mx-auto flex flex-col justify-center items-center w-full md:w-4/5'>
                <div className='pb-8 flex flex-col items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                    <p className='py-6 text-xl'>
                        My Technical Level ! <span className='animate-grow'>🖥️</span>
                    </p>
                </div>

                <div className='container h-[390px]  flex flex-no-wrap overflow-x-scroll bg-blend-overlay scrolling-touch gap-6 gap-y-16 items-start pt-6  rounded-md
                w-[100%] md:w-[88%]'>
                    <div className='hover:scale-105 hover:shadow-purple-500 transition delay-100 duration-200 ease-in-out ml-14 sm:ml-8 md:ml-6 flex-none w-[184px] md:w-[212px] lg:w-[331px] h-[320px] bg-gray-50 shadow-gray-400 shadow-md rounded-xl border  mx-auto pb-6 snap-center'>
                        <h3 className='text-center pt-4 font-semibold text-lg  mb-6'>Frotend Developer</h3>
                        <ul className='flex flex-col '>
                            {frontend.map(({ id, skills, percentage, level }) => (
                                
                                <li key={id} className='px-8 mb-2'>
                                    <h6 className='font-semibold text-xs sm:text-sm md:text-base'>{skills}</h6>
                                    <div className="bg-gray-200  h-4 w-full rounded-2xl">
                                        
                                        <div // eslint-disable-next-line
                                            className={"bg-blue-400  left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-black" + ' ' + percentage}>
                                            {level}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='hover:scale-105 hover:shadow-purple-500 transition delay-100 duration-200 ease-in-out flex-none w-[184px] md:w-[212px] lg:w-[331px] h-[320px] bg-gray-50 shadow-gray-400 shadow-md   rounded-xl border  mx-auto pb-6 snap-center'>
                        <h3 className='text-center pt-4 font-semibold text-lg'>Backend Developer </h3>
                        <ul className='flex flex-col '>
                            {backend.map(({ id, skills, percentage, level }) => (
                                <li key={id} className='px-8 mb-2'>
                                    <h6 className='font-semibold text-xs sm:text-sm md:text-base '>{skills}</h6>
                                    <div className="bg-gray-200  h-4 w-full rounded-2xl">
                                       
                                        <div // eslint-disable-next-line
                                            className={"bg-blue-400  left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-black" + ' ' + percentage}>
                                            {level}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='hover:scale-105 hover:shadow-purple-500 transition delay-100 duration-200 ease-in-out flex-none w-[184px] md:w-[212px] lg:w-[331px] h-[320px] bg-gray-50 shadow-gray-400 shadow-md   rounded-xl border  mx-auto pb-6 snap-center'>
                        <h3 className='text-center pt-4 font-semibold text-lg '>Hardware Skills </h3>
                        <ul className='flex flex-col '>
                            {hardware.map(({ id, skills, percentage, level }) => (
                                <li key={id} className='px-8 mb-2'>
                                    <h6 className='font-semibold text-xs sm:text-sm md:text-base '>{skills}</h6>
                                    <div className="bg-gray-200  h-4 w-full rounded-2xl">
                                        
                                        <div // eslint-disable-next-line
                                            className={"bg-blue-400  left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-black" + ' ' + percentage}>
                                            {level}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='hover:scale-105 hover:shadow-purple-500 transition delay-100 duration-200 ease-in-out flex-none w-[184px] md:w-[212px] lg:w-[331px] h-[320px] bg-gray-50 shadow-gray-400 shadow-md   rounded-xl border  mx-auto pb-6 snap-center'>
                        <h3 className='text-center pt-4 font-semibold text-lg '>Tools & Technologies </h3>
                        <ul className='flex flex-col '>
                            {tools.map(({ id, skills, percentage, level }) => (
                                <li key={id} className='px-8 mb-2'>
                                    <h6 className='font-semibold text-xs sm:text-sm md:text-base'>{skills}</h6>
                                    <div className="bg-gray-200  h-4 w-full rounded-2xl">
                                       
                                        <div // eslint-disable-next-line
                                            className={"bg-blue-400 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-black" + ' ' + percentage}>
                                            {level}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='hover:scale-105 hover:shadow-purple-500 transition delay-100 duration-200 ease-in-out mr-14 sm:mr-8 md:mr-6 flex-none w-[184px] md:w-[212px] lg:w-[331px] h-[320px] bg-gray-50 shadow-gray-400 shadow-md   rounded-xl border  mx-auto 
                    pb-6 snap-center'>
                        <h3 className='text-center pt-4 font-semibold text-lg '>Mobile Development </h3>
                        <ul className='flex flex-col '>
                            {native.map(({ id, skills, percentage, level }) => (
                                <li key={id} className='px-8 mb-2'>
                                    <h6 className='font-semibold text-xs sm:text-sm md:text-base'>{skills}</h6>
                                    <div className="bg-gray-200  h-4 w-full rounded-2xl">
                                        
                                        <div // eslint-disable-next-line
                                            className={"bg-blue-400  left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-black" + ' ' + percentage}>
                                            {level}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
