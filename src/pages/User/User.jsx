import Img from '../../assets/images/users/2399f438-0110-48ee-bcfb-f5d32510f29f.jpeg'
const User = () => {
    return (
        <div>
            <h1 className='underline text-[2rem] font-bold'>Rami</h1>
            <div className='mx-auto w-[200px] h-[200px] rounded-full overflow-hidden border-[5px] border-solid border-black p-1 shadow-md'>
                <img src={Img} alt="..." className='w-full h-full rounded-full'/>
            </div>
            <div>
                <div className='flex items-end gap-5'>
                    <p className='text-[2rem] font-bold'>Email</p>
                    <p className='text-[1.8rem]'>mmm@mmm.com</p>
                </div>
                <div className='flex items-end gap-5'>
                    <p className='text-[2rem] font-bold'>Age</p>
                    <p className='text-[1.8rem]'>20</p>
                </div>
                <div className='flex items-end gap-5'>
                    <p className='text-[2rem] font-bold'>Status</p>
                    <p className='text-[1.8rem]'>Accept</p>
                </div>
                <div className='flex items-end gap-5'>
                    <p className='text-[2rem] font-bold'>Posts</p>
                    <p className='text-[1.8rem]'>9</p>
                </div>
            </div>
            <div className='pt-5 flex flex-col gap-5'>
                {[1,2,3,4,5,6,7,8,9].map((e, i) => <div key={i} className='bg-white p-5 rounded-md'>
                    Post {i+1}
                </div>)}
            </div>
        </div>
    )
}

export default User