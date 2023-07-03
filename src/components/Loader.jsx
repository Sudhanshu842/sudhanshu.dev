import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {

    return (
        <div className='flex w-full bg-white h-screen justify-center items-center'>
            <HashLoader
                color='black'
                loading='true'
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>

    )
}

export default Loader