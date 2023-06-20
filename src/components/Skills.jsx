import React from 'react'
import CSS from '../assets/images/css.png'
import HTML from '../assets/images/html.png'
import JavaScript from '../assets/images/javascript.png'
import REACT from '../assets/images/react.png'
import Node from '../assets/images/node.png'
import Sql from '../assets/images/sql.png'
export default function Skills() {
  return (
    <div name='skills' className='w-full h-sreen bg-[#0a192f] text-gray-300'>
        
      <div className='max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'> Skills</p>
            <p  className='py-6'>  These are the Technologies I have worker with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 max-auto'src={HTML} alt="html"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 max-auto'src={CSS} alt="css"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 max-auto'src={JavaScript} alt="javascript"/>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 max-auto'src={REACT} alt="react"/>
                <p className='my-4'>React.js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 max-auto'src={Node} alt="node"/>
                <p className='my-4'>Node.js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 max-auto'src={Sql} alt="sgl"/>
                <p className='my-4'>SQL</p>
            </div>
        </div>
      </div>
    </div>
  )
}
