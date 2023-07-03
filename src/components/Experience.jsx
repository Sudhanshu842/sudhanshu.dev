import React from 'react'

const Experience = () => {
  const experience = [
    {
      id: 1,
      date: ' April 2021 – July 2022',
      title: 'Technical Team Member',
      description: 'Team Cybrotics, GECA',
      info:'In my role as a technical team member at Cybrotics, I gained two years of hands-on experience in designing prototype robots. I was responsible for working with sensors and actuators, designing PCBs, and programming and controlling robots. I had the opportunity to showcase my skills by participating in the prestigious DD National Robocon 2022, held and conducted by IIT Delhi',
    },
    {
      id: 2,
      date: ' Sep 2022 - June 2023',
      title: 'Joint Technical secretary',
      description: '(TEESA)',
      info: 'As the Joint Technical Secretary at GECA (Government College of Engineering, Aurangabad), I held a pivotal role in overseeing technical activities and initiatives. Throughout my one-year tenure, I successfully conducted workshops on various technical topics, addressing and resolving technical issues faced by students and faculty members. I actively guided and mentored individuals in technical fields, assisting them in acquiring the necessary knowledge and skills. By leveraging my expertise, I facilitated a conducive learning environment and fostered a culture of technical growth within the college community.',
    },
    {
      id: 3,
      date: '16 & 17 July 2022',
      title: ' DD National Robocon (IIT Delhi), Participant',
      description: '',
      info: ' I participated in the prestigious DD National Robocon competition held by IIT Delhi, where the theme was "Lagoori." The objective of the competition was to complete a task within specified time limits, which involved breaking the Lagoori structure and hitting a ball on the head of the opponent team. This national-level robotics competition brought together around 40 teams from colleges across India. As a participant, our team showcased our skills and technical prowess, ultimately securing the 13th rank among the participating teams. It was an intense and challenging competition that required strategic thinking, precise execution, and effective teamwork. Participating in such a highly competitive event allowed us to demonstrate our capabilities, learn from other talented teams, and gain valuable experience in the field of robotics.',
    },
    {
      id: 4,
      date: '2022',
      title: ' SIH Internal Hackathon, Participant',
      description: 'GECA',
      info: 'We participated in the SIH internal hackathon, focusing on providing innovative ideas for solar greenhouse systems. Our team developed concepts integrating solar technologies, optimizing energy generation, implementing smart irrigation, and utilizing IoT devices. We aimed to advance sustainable agriculture and promote renewable energy in greenhouse farming.',
    },
    {
      id: 5,
      date: 'March 31 2023',
      title: ' Web Development Workshop, Participant',
      description: 'TEESA',
      info: 'As Joint Technical Secretary of TEESA, I organized and conducted a web development workshop where participants learned HTML, CSS, Bootstrap, and JavaScript basics. They were given the task to create and host their own portfolios, gaining practical experience in web development.',
    },


  ]
  return (
    <div name="experience" className='w-full h-screen pt-16 md:pt-28 text-gray-600 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <div className=' mx-auto flex flex-col justify-center items-center w-full md:w-4/5'>
        <div className='pb-8 flex flex-col items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
          <p className='py-6 text-xl'>
            My Experience ! <span className='animate-grow'>🎯</span>
          </p>
        </div>
        <div className="container px-16 sm:px-6 h-[460px] flex flex-col overflow-y-scroll  scrolling-touch gap-6 items-start pt-6
                sm:w-[70%] md:w-[88%] snap-x snap-mandatory rounded-xl ">
          <ol className="border-l border-neutral-300 dark:border-neutral-500">
            {experience.map(({ id, date, title, info, description }) => (
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-red-500">
                    {date}
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl text-black font-semibold">{title}</h4>
                  <h6 className="mb-1.5 text-base text-gray-800 font-medium">{description}</h6>
                  <p className="mb-3 text-gray-700">
                    {info}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Experience