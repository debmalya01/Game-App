import React from 'react';
import logo from '../assets/gaming_5087379.png';
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";

function Nav() {
  return (
    <nav className='bg-black px-5 flex items-center'>
        <img src={logo} alt="logo" className='w-20 ml-2 mr-2 ' />
        <div className='font-bold text-3xl  text-slate-300'>GameR.</div>
        <div className='flex bg-neutral-700 items-center w-full p-2 mx-10 rounded-full'>
         <HiOutlineMagnifyingGlass color='white' />   
         <input type="text" placeholder='Search Games' className='bg-transparent w-full outline-none px-2 text-white'/>
        </div>
    </nav>
  )
}

export default Nav