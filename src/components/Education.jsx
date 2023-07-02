import React from 'react'

const Education = () => {
    return (
        <div name="about" className='w-full h-screen   text-gray-600 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center items-center w-3/4'>
                <div className='pb-2 flex flex-col items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Education</p>
                    <p className='py-4 text-xl'>Where i have studied ! <span className='animate-grow'>🎓</span></p>
                </div>
                <div>
                    <p className=' text-base sm:text-2xl md:text-4xl mt-2 md:mt-8 text-black'>
                        Bachelor's Degree in Electronics & Telecommunication Engineering
                    </p>
                    <br />
                    <div className='flex flex-row justify-evenly'>
                        <p className='text-sm sm:text-lg md:text-2xl'>
                            Government College of Engineering,
                            <br />
                            <span>Aurangabad</span> 
                            
                        </p>
                        <div>
                            <p className='text-sm sm:text-lg md:text-2xl'>
                                Current : 8.2 SGPA
                            </p>
                            <p className='text-sm sm:text-base md:text-xl text-black'>
                                2020 - 2024
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div>
                    <p className=' text-base sm:text-2xl md:text-4xl mt-2 md:mt-8 text-black'>
                        Maharashtra State Board of Higher Secondary Education
                    </p>
                    <br />
                    <div className='flex flex-row justify-evenly'>
                        <p className='text-sm sm:text-lg md:text-2xl'>
                            Atulesh Convent Jr.College, Nagpur
                        </p>
                        <div >
                            <p className='text-sm sm:text-lg md:text-2xl'>
                                Scored 74.9%
                            </p>
                            <p className='text-sm sm:text-base md:text-xl text-black'>
                                2018 - 2020
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div>
                    <p className=' text-base sm:text-2xl md:text-4xl mt-2 md:mt-8 text-black'>
                        Secondary School, Central Board of Secondary Education
                    </p>
                    <br />
                    <div className='flex flex-row justify-evenly'>
                        <p className='text-sm sm:text-lg md:text-2xl'>
                            Mount Carmel Convent School, Nagpur
                        </p>
                        <div>
                            <p className='text-sm sm:text-lg md:text-2xl'>
                                Scored 10 CGPA
                            </p>
                            <p className='text-sm sm:text-base md:text-xl text-black'>
                                2018
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Education