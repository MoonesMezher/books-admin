import React, { useState } from 'react'
import { FaArrowCircleRight, FaBars, FaBrush, FaSearch, FaUsers } from 'react-icons/fa'
import { FaGear, FaXmark } from 'react-icons/fa6';
import PopUp from '../components/PopUp/PopUp'

const Header = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    
    return (
        <header className='shadow-md fixed left-0 top-0 px-4 bg-white w-full z-20 ps-[320px] pe-[50px]'>
            <div className='flex justify-between items-center py-5'>
                <div className='w-[300px] border-[1px] border-black rounded-md flex flex-row-reverse justify-center items-center ps-3 overflow-hidden'>
                    <input type='text' className='w-full p-2 focus:outline-none' placeholder='search on book or user'/>
                    <FaSearch/>
                </div>
                <div className='' onClick={() => setShow(!show)}>
                    {
                        !show
                        ?
                        <FaBars className='text-[2rem] cursor-pointer relative z-20'/>
                        :
                        <FaXmark className='text-[2rem] cursor-pointer relative z-20'/>
                    }
                </div>
                <div className={`fixed right-0 ${show?'top-[75px]': 'top-[-100%]'} duration-300 w-[300px] bg-white shadow-md z-10 h-fit text-center text-[1.2rem] py-[30px] rounded-md`}>
                    <div className='py-[20px] flex justify-center gap-2 items-center cursor-pointer duration-300 hover:ps-2'>Theme <FaBrush /></div>
                    <div className='py-[20px] flex justify-center gap-2 items-center cursor-pointer duration-300 hover:ps-2'>Team <FaUsers /></div>
                    <div className='py-[20px] flex justify-center gap-2 items-center cursor-pointer duration-300 hover:ps-2'>Settings <FaGear /></div>
                    <div className='py-[20px] flex justify-center gap-2 items-center cursor-pointer duration-300 hover:ps-2' onClick={() => setShow2(true)}>Logout <FaArrowCircleRight /></div>
                </div>
            </div>
        </header>
    )
}

export default Header