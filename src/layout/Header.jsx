import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='shadow-md fixed left-0 top-0 px-4 bg-white w-full z-20 ps-[320px] pe-[50px]'>
            <div className='flex justify-between items-center py-5'>
                <div className='w-[300px] border-[1px] border-black rounded-md flex flex-row-reverse justify-center items-center ps-3 overflow-hidden'>
                    <input type='text' className='w-full p-2 focus:outline-none' placeholder='search on book or user'/>
                    <FaSearch/>
                </div>
                <div className=''>
                    <FaBars className='text-[2rem] cursor-pointer'/>
                </div>
            </div>
        </header>
    )
}

export default Header