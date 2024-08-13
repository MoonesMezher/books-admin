import React from 'react'
import { BiLockAlt } from 'react-icons/bi'
import { FaBook, FaFile, FaHome, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const links = [
    {
        title: 'Pages',
        sub: [
            {
                name: 'Home',
                url: '/',
                icon: <FaHome className='text-[1.3rem]'/>
            },
            {
                name: 'Users',
                url: '/users',
                icon: <FaUser className='text-[1.3rem]'/>
            },
            {
                name: 'Books',
                url: '/books',
                icon: <FaBook className='text-[1.3rem]'/>
            },
            {
                name: 'Block List',
                url: '/blocklist',
                icon: <BiLockAlt className='text-[1.3rem]'/>
            },
            {
                name: 'Reports',
                url: '/reports',
                icon: <FaFile className='text-[1.3rem]'/>
            },
        ]
    },
    {
        title: 'Statistics',
        sub: [
            {
                name: 'Users',
                url: '/statistics/users',
                icon: <FaUser className='text-[1.3rem]'/>
            },
            {
                name: 'Books',
                url: '/statistics/books',
                icon: <FaBook className='text-[1.3rem]'/>
            },
        ]
    },
]

const Sidebar = () => {
    return (
        <aside className='shadow-md fixed left-0 top-0 z-50 bg-white h-screen w-[300px]'>
            <div className='flex justify-between flex-col py-5'>
                <Link to={'/'} className='overflow-hidden cursor-pointer text-[2rem] font-bold text-center' onClick={() => window.scrollTo(0,0)}>
                    {/* <img src={} alt='logo' className='w-full h-full object-cover'/> */}
                    BOOKS
                </Link>
                <div className='px-5 mt-10'>
                    {links.map((e, i) => <div key={i} className='flex flex-col gap-5 mb-10'>
                        <h1 className='text-[1.5rem] text-neutral-400'>{e.title}</h1>
                        {e.sub.map((s,ii) => <Link to={s.url} key={ii} className='flex items-center gap-2 duration-300 hover:ps-5' onClick={() => window.scrollTo(0,0)}>
                            {s.icon}
                            <span className='text-[1.3rem]'>{s.name}</span>
                        </Link>)}
                    </div>)}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar