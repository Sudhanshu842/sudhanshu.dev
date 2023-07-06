import React from 'react'

const Education = () => {

    const education = [
        {
            id: 1,
            title: "BTech in Electronics & Telecommunication Engineering",
            place: 'Government College of Engineering,',
            city:'Aurangabad',
            score: 'Current : 8.2 SGPA',
            date: '2020 - 2024',
        },
        {
            id: 2,
            title: "Maharashtra State Board of Higher Secondary Education",
            place: ' Atulesh Convent Jr.College,',
            city:'Nagpur',
            score: 'Scored 74.9%',
            date: '2018 - 2020',
        },
        {
            id: 3,
            title: "Secondary School, Central Board of Secondary Education",
            place: 'Mount Carmel Convent School,',
            city:'Nagpur',
            score: 'Scored 10 CGPA',
            date: '2018',
        },
    ]
    return (
        <div name="about" className='w-full h-screen   text-gray-600 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center items-center w-3/4'>
                <div className='pb-2 flex flex-col items-center'>
                    <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500'>Education</p>
                    <p className='py-4 text-xl'>Where i have studied ! <span className='animate-grow'>🎓</span></p>
                </div>
                <>
                {education.map(({id, title, score, place, date, city}) => (
                    <>
                        <div key={id}>
                            <p className=' text-base sm:text-xl md:text-2xl lg:text-3xl mt-2 md:mt-6 text-black'>
                                {title}
                            </p>
                            <br />
                            <div className='flex flex-row justify-between'>
                                <div className=' text-sm sm:text-lg md:text-xl'>
                                    {place} <br />
                                    <span className=' text-sm sm:text-lg md:text-xl'>{city}</span> 
                                </div>
                                
                                <div className='z-10 text-right'>
                                    <p className='text-sm sm:text-lg md:text-2xl text-right'>
                                        {score}
                                    </p>
                                    <p className='text-sm sm:text-base md:text-xl  text-black text-right'>
                                        {date}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </>
                ))}
                </>
            </div>
        </div>
    )
}

export default Education