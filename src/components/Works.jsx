import React from 'react'
import collective from '../assets/images/collective.jpeg'
import hotel from '../assets/images/hotel.jpeg'
import computer from '../assets/images/computer.jpeg'
export default function Works() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600' >
             Work
            </p>
            <p className='py-6'>
              Check out some of my recent work
            </p>
        </div>
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${collective})`}} className='shadow-lg shadow-[#040c19] group container flex justify-center items-center mx-auto content-div'>
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider ">
Full Stack Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='https://starter-kit-fhvk.onrender.com'target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo </button>
                    </a>
                    <a href='https://github.com/khmdagal/The-Collective-Foundation'target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'> Code</button>
                    </a>
                </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${hotel})`}} className='shadow-lg shadow-[#040c19] group container flex justify-center items-center mx-auto content-div'>
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider ">
Full Stack Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='https://cyf-shimaadnan-hotel-react.netlify.app/'target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo </button>
                    </a>
                    <a href='https://github.com/Shimaadnan/cyf-hotel-react'target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'> Code</button>
                    </a>
                </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${computer})`}} className='shadow-lg shadow-[#040c19] group container flex justify-center items-center mx-auto content-div'>
                <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider ">
Full Stack Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='https://vercel.com/shimaadnan/deployed-todo-app-72x3'target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo </button>
                    </a>
                    <a href='https://github.com/Shimaadnan/deployed-todo-app' target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'> Code</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}
