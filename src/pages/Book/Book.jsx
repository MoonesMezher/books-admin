import { Link, useParams } from "react-router-dom"
import Img from '../../assets/images/books/Fuel the Fire by Krista & Becca Ritchie.jpeg'

const Book = () => {
    const { id } = useParams();

    const info = {
        type: 'story',
        img: Img,
        title: 'The Story',
        subtitle: 'The Story Title pfpehpfhef',
        offer: 150,
        price: 100    
    }

    return (
        <div>
            <h1 className='underline text-[2rem] font-bold'>Book Details</h1>
            <div className="flex gap-[30px] mt-[1.5rem]">
                <div className="overflow-hidden rounded-md w-[400px] h-[400px] mb-[10px] shadow-md">
                    <img src={info?.img} className="w-full h-full object-cover duration-300"/>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="bg-black text-white rounded-[30px] p-2 w-fit px-5">{info?.type}</div>
                    <h2 className="text-[1.5rem] font-bold mb-2">{info?.title}</h2>
                    <h3 className="mb-5">{info?.subtitle}</h3>
                    {/* <h2>{info?.exp.map()}</h2> */}
                    <div className="relative w-fit">
                        {info?.offer && <del className="left-[-12px] top-[-12px] text-neutral-400">{info?.offer}</del>}
                        <h3 className="flex items-center gap-2 mx-auto w-fit"><span className="font-bold">{info?.price}</span>$</h3>
                    </div>
                </div>
            </div>
            <div className="flex gap-[40px] mt-[30px] justify-center">
                <Link to={'/edit-book/'+id} className="w-fit block bg-yellow-500 text-white shadow-md px-5 py-2 rounded-md duration-300 hover:scale-105 cursor-pointer">Edit</Link>
                <div className="w-fit bg-red-500 text-white shadow-md px-5 py-2 rounded-md duration-300 hover:scale-105 cursor-pointer">Delete</div>
            </div>
        </div>
    )
}

export default Book