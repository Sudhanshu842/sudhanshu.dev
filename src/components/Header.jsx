import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineAppstore } from 'react-icons/ai'
import darklogo from '../assets/darklogo.png';

const Header = () => {
    const [nav, setNav] = useState(true);

    const links = [

        {
            id: 1,
            link: 'Home',
            icon: 'uil uil-estate'
        },
        {
            id: 2,
            link: 'about',
            icon: 'uil uil-user'
        },
        {
            id: 3,
            link: 'skills',
            icon: 'uil uil-file-alt'
        },
        {
            id: 4,
            link: 'experience',
            icon: 'uil uil-briefcase-alt'
        },
        {
            id: 5,
            link: 'projects',
            icon: 'uil uil-scenery'
        },
        {
            id: 6,
            link: 'contact',
            icon: 'uil uil-message'
        }
    ]

    return (
        <>
            <nav className='hover:scale-105 hover:shadow-red-400 shadow-md transition delay-100 duration-200 ease-in-out w-full px-16 h-16 md:h-20 z-40  bottom-0 fixed md:top-0 flex items-center justify-start md:justify-evenly mx-auto bg-gray-50 md:bg-none md:border-none  border-t-2 border-l-2 border-r-2 rounded-t-3xl'>

                <Link to="index.html" smooth duration={500} className='' >
                    <img src={darklogo} alt="sudhanshu" className='transition cursor-pointer hover:scale-105 h-6 w-auto' />
                </Link>

                <div className='flex'>
                    <ul className='hidden md:flex '>
                        {links.map(({ id, link, icon }) => (
                            <li
                                key={id} className='flex px-4 cursor-pointer capitalize text-base font-medium text-gray-600 hover:scale-105 hover:text-black duration-200 '>
                                <Link to={link} smooth duration={500} className='flex flex-col items-center'>
                                    {link}
                                    <i className={icon}></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                


                {nav && (
                    <div className=' flex justify-center bottom-0 left-0 fixed z-20 w-full px-16 h-36 sm:h-40 md:hidden rounded-t-3xl shadow-md shadow-black  border-t-2 border-l-2 border-r-2 transition ease-in-out duration-100 bg-gray-50'>
                        <ul className='grid grid-cols-3 justify-items-center gap-x-12 sm:gap-x-16 gap-y-4 sm:gap-y-4 md:hidden'>
                            {links.map(({ id, link, icon }) => (
                                <li
                                    key={id} className='flex m-auto sm:px-4 cursor-pointer capitalize text-base sm:text-xl font-medium text-gray-600 hover:scale-105 hover:text-black duration-200'>
                                    <Link to={link} smooth duration={500} className='flex flex-col justify-normal items-center'>
                                        {link}
                                        <i className={icon}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </nav>

            <button onClick={() => setNav(!nav)} className='flex z-50 fixed bottom-4 right-8 cursor-pointer md:hidden'>
                    {nav ?
                        <><FaTimes size={20}/></> : <><AiOutlineAppstore size={20}/></>
                    }
            </button>

        </>
    )
}

export default Header