/* eslint-disable no-unused-vars */
import React from 'react'
import experienceImg from "../../assets/expricences.png"

const Expenience = () => {
    return (
        <div className='section-container my-24 flex flex-col md:flex-row items-center justify-center md:gap-20 gap-8'>
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={experienceImg} alt="" className='w-full h-full' />
            </div>
            <div className='md:w-1/2 mx-auto'>
                <h3 className='uppercase text-lg font-semibold text-primary mb-b'>Experiences</h3>
                <h2 className='capitalize text-4xl font-bold mb-4 lg:w-1/2'>We Provide you the best ecperience</h2>
                <p className='text-second dark:text-white mb-2 lg:w-2/3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae reprehenderit architecto aut ipsa tenetur, voluptates iusto consequuntur non. Ducimus, officia illo. Fuga beatae quod hic inventore eius quis aspernatur vel?</p>
                <button className='border border-l-rose-50 px-4 py-2 rounded hover:bg-primary hover:text-white transition ease-linear'>More Info</button>
            </div>
        </div>
    )
}

export default Expenience