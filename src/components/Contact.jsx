import React from 'react'

const Contact = () => {
    return (
        <>
        <div name="contact" className='w-full h-screen p-4 md:pt-28 lg:pt-48 text-gray-600 '>
            <div className='flex flex-col p-4 justify-start max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 flex flex-col items-center'>
                    <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500'>contact</p>
                    <p className='py-6 text-xl text-center'>
                        submit the form below to get in touch with me <span className='animate-grow'>👻</span></p>
                </div>

                <div className='flex justify-center items-center'>

                    <form
                        action="https://getform.io/f/4e96f353-e1ec-41c6-b549-3751292a4673"
                        method='POST'
                        className='flex flex-col w-4/5 md:w-1/2'>
                        <input
                            type="text" name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none' required />

                        <input
                            type="text" name='email'
                            placeholder='Enter your email'
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none' required />

                        <textarea
                            name="message" rows="5"
                            placeholder='Enter your message'
                            className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'></textarea>


                        <button
                            className='text-white bg-gradient-to-b from-gray-500 to-black hover:bg-gradient-to-t hover:from-gray-500
                         hover:to-black hover:transition px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's Talk</button>
                    </form>

                </div>
            </div>

        </div>
        <div class="bg-white bottom-0 z-10  shadow w-full dark:bg-gray-900 pb-24 md:pb-6 ">
        <div class="w-full max-w-screen-xl mx-auto ">
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 Sudhanshu™. Made with Code & love ! ❤️.</span>
        </div>
    </div>
    </>
    )
}

export default Contact