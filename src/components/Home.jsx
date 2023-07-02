import React from 'react'
import Heroimage from '../assets/sudh_photo.JPG'
//import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const words = [
        "Web Developer & Designer",
        "React Native Developer",
        "Frontend Developer",
        "MERN Stack developer",
        "Java Programmer",
        "IOT Developer",
        "Hardware Hacking Enthusiast",
        "Embedded System Developer",
        "Robotics Enthusiast",



    ];
    const [text] = useTypewriter({
        words,
        loop: 0,
    });

    return (
        <div name="Home" className='h-screen w-full  -z-50 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
             justify-center h-4/5 md:h-full pb-8
             px-4 md:flex-row '>
                <div className='flex flex-col pt-24 justify-center h-full'>
                    <h1 className='text-gray-500 text-xl py-4 max-w-md animate-bounce'><span className='animate-waving-hand'>👋</span> Hello there!</h1>
                    <h2 className='text-lg md:text-xl font-bold text-black duration-200'>
                        I'm a <span>{text}</span><Cursor />
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am deeply fascinated by the world of technology and constantly strive to enhance my skills in both development & design.
                        Building innovative solutions and pushing the boundaries of what's possible. Let's create something extraordinary together.
                    </p>
                    <div className='hidden md:block'>
                        <Link to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex
                         items-center rounded-md bg-gradient-to-r from-black
                          to-gray-900 gap-x-4 '>
                            projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <svg
                                    class="button__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                        fill="#FFFFFF"
                                    ></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={Heroimage} alt="my profile" className='rounded-2xl
                     mx-auto w-64 h-auto bg-cover border-4 border-black animate-border-wave ' />
                </div>
            </div>
        </div>
    )
}

export default Home