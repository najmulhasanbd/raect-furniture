import React from 'react'
import banner from "../../assets/banner.png"
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{ background: `url(${banner})` }}>
            <div className='md:pt-48 px-4 pt-24 text-center space-y-6 md:w-1/2 mx-auto'>
                <h1 className='text-3xl  text-white lg:text-6xl font-medium leading-tight'>Make your interior more minimalistic & modern</h1>
                <p>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                <form action="" className='relative'>
                    <input type="text" className='border-2 mt-8 border-gray-300 px-4 py-3 w-full md:w-50 focus:outline-none rounded-full ' placeholder='Enter your email address' />
                    <div className='absolute top-1/2 right-0 transform -translate-x-1/2 bg-primary rounded-full p-2'>
                        <FaSearch />
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Hero