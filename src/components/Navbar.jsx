import React,{useState} from 'react'
import {FaBookOpen,FaBars,FaTimes} from "react-icons/fa";

export default function Navbar() {
  const[nav,setNav]=useState(false)
  const handleclick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
     <div>
      <FaBookOpen style={{width:'50px'}}/>
    </div>
    {/* Menu */}
    
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    
    {/* Hamburger */}
    <div onClick={ handleclick} className='md:hidden z-10'>
    {/* {!nav ? < FaBars/> : <FaTimes/>} */}
    {!nav ?<FaBars/> : <FaTimes/>}
    </div>
    {/* Mobile menu */}
    
    <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li> 
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Works</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
    
    {/* Social Media */}
    <div className='hidden'>

    </div>

    </div>

  )
}