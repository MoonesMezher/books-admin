import { useState, useEffect } from 'react'

const PopUp = ({ isShow, setIshow, logout }) => {
    const [show, setShow] = useState();

    useEffect(() => {
        setShow(isShow)
    }, [isShow])

    const handleCancel = () => {
        setShow(false); setIshow(false);
    }

    return (
        <div className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-40 bg-white border-[1px] border-solid border-black p-10 rounded-md ${show? 'block': 'hidden'}`}>
            <h1 className='mb-5 text-[1.2rem]'>
                {
                    logout
                    ? 'Are you sure you want to logout?'
                    :`Are you sure you want to ${<span className='font-bold'>Delete</span>}this item?`
                }
            </h1> 
            <div className='flex justify-center gap-[20px]'> 
                <div className="w-fit bg-green-500 text-white shadow-md px-5 py-2 rounded-md duration-300 hover:scale-105 cursor-pointer">Yes</div>
                <div className="w-fit bg-red-500 text-white shadow-md px-5 py-2 rounded-md duration-300 hover:scale-105 cursor-pointer" onClick={handleCancel}>No</div>
            </div>
        </div>
    )
}

export default PopUp