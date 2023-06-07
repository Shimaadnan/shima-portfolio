import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import React from '../assets/react.png'
import Node from '../assets/node.png'
import Sql from '../assets/sql.png'
export default function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        
      <div className='max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'> Experiences</p>
            <p > These are the Technologies I have worker with</p>
        </div>
        <div>
            <div>
                <img src={HTML} alt="html"/>
            </div>
        </div>
      </div>
    </div>
  )
}
