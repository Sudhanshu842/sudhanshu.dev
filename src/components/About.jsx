import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const About = () => {
    return (
        <div name="about" className='w-full h-screen pt-28 text-gray-600 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center items-center w-3/4'>
                <div className='pb-2 flex flex-col items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
                    <p className='py-4 text-xl'>Who i am ? <span className='animate-grow'>🤔</span></p>
                </div>

                <p className=' text-sm sm:text-base md:text-xl mt-2 md:mt-8 lg:mt-10 '>
                    {/* 👋 Hi, I'm Sudhanshu Doble, a final year Electronics and Telecommunication Engineering student at GECA. live in Wardha, Maharashtra, India. I'm passionate about software engineering and web development. 💻✨
                    I've explored various fields like video editing 🎥, hardware hacking 🔧, and robotics 🤖, but my satisfaction lies in creating software solutions. I love the thrill of bringing ideas to life through coding! 🚀
                    I'm constantly learning and staying updated with the latest technologies to enhance my skills. 🔍📚
                    Currently, I'm on the lookout for exciting opportunities to grow and contribute to the software engineering industry. 🌱💼
                    Let's connect and collaborate! Feel free to reach out and let's build something amazing together. 🤝✨"*/}

                    👋 Hi there!
                    <br />
                    I'm Sudhanshu Doble, a Full Stack MERN Web Developer, React Native Developer and Hardware Hacker. I'm passionate about technology and constantly enhancing my skills in development and design.
                    <br /><br />
                    {/* 💻 I craft innovative solutions and create seamless user experiences using the MERN stack. I specialize in MongoDB, Express.js, React.js, and Node.js to build robust web applications.
                    <br /><br /> */}
                    🔌 I'm also into hardware hacking, tinkering with electronics, & combining software and hardware for unique experiences. I love building custom IoT devices and experimenting with Arduino/Raspberry Pi.
                    <br /><br />
                    🚀 Continuous learning is key to my professional journey. I seek new opportunities, refine my skills, and stay up-to-date with industry trends. Collaboration with dynamic teams is where I thrive.

                </p>
                <br />
                <p className='text-sm sm:text-base md:text-xl'>
                    {/* Currently, I'm on the lookout for exciting opportunities to grow and contribute to the software engineering industry. 🌱💼
                    Let's connect and collaborate! Feel free to reach out and let's build something amazing together. 🤝✨ */}

                    ✨ If you're interested in collaborating or have questions, feel free to reach out. I'm always eager to connect with fellow tech enthusiasts and embark on exciting ventures together.
                    <br />
                    I look forward to connecting with you soon! <br />Feel free to contact me✌️<span className='flex justify-center'>👇</span>
                    <a
                        href="https://wa.link/fshrk8"
                        className='flex justify-center  pl-2 items-center 
                        w-full text-black'
                        target='blank'>
                        Whatsapp<FaWhatsapp size={20} />
                    </a>
                </p>
            </div>


        </div>
    )
}

export default About