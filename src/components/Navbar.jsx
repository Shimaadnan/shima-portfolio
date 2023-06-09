import React,{useState} from 'react'
import {FaBookOpen,FaBars,FaTimes,FaLinkedin,FaGithub} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import CV from '../CV/Shima-CV.pdf'


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
        <li>
        <Link  to="hero"  smooth={true}  duration={500} >
          Home
        </Link></li>
        <li><Link  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li><Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li><Link  to="work"  smooth={true}  duration={500} >
          Works
        </Link></li>
        <li><Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
      </ul>
    
    {/* Hamburger */}
    <div onClick={ handleclick} className='md:hidden z-10'>
    {/* {!nav ? < FaBars/> : <FaTimes/>} */}
    {!nav ?<FaBars/> : <FaTimes/>}
    </div>
    {/* Mobile menu */}
    
    <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleclick } to="hero"  smooth={true}  duration={500} >
          Home
        </Link></li> 
        <li className='py-6 text-4xl'><Link onClick={handleclick } to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleclick } to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleclick } to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleclick } to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
      </ul>
    
    {/* Social Media */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-[0]'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durstion-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/shima-adnan-89a21591/'>
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durstion-300 bg-black' >
          <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/shimaadnan">
            GitHub < FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durstion-300 bg-[#6fc2f0]'>
          <a className='flex justify-between items-center w-full text-gray-300' href="mailto:shimaadnanbasmenj@gmail.com">
           Email  <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] durstion-300 bg-gray-600'>
          <a className='flex justify-between items-center w-full text-gray-300' href={CV}
          download>
            Resume < BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>

    </div>

    </div>

  )
}
