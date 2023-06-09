import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
export default function Hero() {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Shima Adnanbasmenj</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am Full Stack Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Developer, holding a Master's degree in Mathematics with 10 years of teaching experience.
           Recently graduated from Code Your Future, an intensive full-stack development program.
             Participated in regular in-person and online software development classes and submitted weekly coursework, solving many problems for various software development technologies
        </p>
        <div>
    <button className='text-white group  border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600  hover:border-pink-600'> 
    View Works
    <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight ml-3/>
        </span></button>
        </div>
        </div>
         </div>
  )
}
