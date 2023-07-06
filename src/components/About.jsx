import React from 'react'


const About = () => {
    return (
        <div name="about" className='w-full h-screen pt-6 md:pt-28 lg:pt-48 text-gray-600 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center items-center w-3/4'>
                <div className='pb-2 flex flex-col items-center'>
                    <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
                    <p className='py-4 text-xl'>Who i am ? <span className='animate-grow'>🤔</span></p>
                </div>

                <p className=' text-xs sm:text-base md:text-xl mt-0 md:mt-8 lg:mt-10 '>
                    {/* 👋 Hi, I'm Sudhanshu Doble, a final year Electronics and Telecommunication Engineering student at GECA. live in Wardha, Maharashtra, India. I'm passionate about software engineering and web development. 💻✨
                    I've explored various fields like video editing 🎥, hardware hacking 🔧, and robotics 🤖, but my satisfaction lies in creating software solutions. I love the thrill of bringing ideas to life through coding! 🚀
                    I'm constantly learning and staying updated with the latest technologies to enhance my skills. 🔍📚
                    Currently, I'm on the lookout for exciting opportunities to grow and contribute to the software engineering industry. 🌱💼
                    Let's connect and collaborate! Feel free to reach out and let's build something amazing together. 🤝✨"*/}

                    I'm Sudhanshu Doble, a Full Stack MERN Web Developer, React Native Developer and Hardware Hacker. I'm passionate about technology and constantly enhancing my skills in development and design.
                    <br /><br />
                    {/* 💻 I craft innovative solutions and create seamless user experiences using the MERN stack. I specialize in MongoDB, Express.js, React.js, and Node.js to build robust web applications.
                    <br /><br /> */}
                    🔌 I'm also into hardware hacking, tinkering with electronics, & combining software and hardware for unique experiences. I love building custom IoT devices and experimenting with Arduino/Raspberry Pi.
                    🚀 Continuous learning is key to my professional journey. I seek new opportunities, refine my skills, and stay up-to-date with industry trends. Collaboration with dynamic teams is where I thrive.

                </p>
                <br />
                <p className='text-xs  sm:text-base md:text-xl'>
                    Currently, I'm on the lookout for exciting opportunities to grow and contribute to the software engineering industry. 🌱💼
                    Let's connect and collaborate! Feel free to reach out and let's build something amazing together. 🤝✨
                   
                </p>
            </div>


        </div>
    )
}

export default About