import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import PopUp from '../../components/PopUp/PopUp'

const reports = [
    {
        report: 'You have to be more careful in your work',
        from: 'Rami'
    },
    {
        report: 'You have to be more careful in your work',
        from: 'Rami'
    },
    {
        report: 'You have to be more careful in your work',
        from: 'Rami'
    },
    {
        report: 'You have to be more careful in your work',
        from: 'Rami'
    },
    {
        report: 'You have to be more careful in your work',
        from: 'Rami'
    },
    {
        report: 'You have to be more careful in your work',
        from: 'Rami'
    },
]

const Reports = () => {
    const [show, setShow] = useState();
  return (
    <div>
        <h1 className='underline text-[2rem] font-bold'>Reports</h1>
        <div className='flex flex-col gap-[20px] mt-[1.5rem]'>
            {reports.map((e, i) => <div key={i} className='w-full bg-white rounded-md p-3 relative'>
                <FaTrash onClick={ () => setShow(i+1) }className='absolute right-[10px] top-[10px] text-[1.1rem] duration-300 hover:scale-125 hover:rotate-3 text-red-500 z-10 cursor-pointer'/>
                <q className='text-[1.5rem]'>
                    {e.report}
                </q>
                <h2 className='mt-[1rem] font-bold'>{e.from}</h2>
            </div>)}
            <PopUp isShow={show} setIsShow={setShow}/>
        </div>
    </div>
  )
}

export default Reports