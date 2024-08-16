// import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const BookCard = ({ info, index, animate }) => {
    return (
        <div className="p-[1rem] rounded-[10px] bg-white shadow-md relative duration-300 hover:scale-105 h-[400px]">
            {/* <div className="bg-black text-white rounded-[30px] p-2 w-fit px-5 z-10 relative mb-5">{info?.type}</div> */}
            <div className="overflow-hidden w-full h-full mx-auto mb-[10px] absolute left-0 top-0 z-0">
                <img src={'http://localhost:8000/'+info?.book_image} className="w-full h-full object-cover duration-300 blur-md"/>
            </div>
            <h2 className="text-[1.5rem] font-bold mb-2 relative z-10">{info?.title}</h2>
            <h3 className="mb-5 relative z-10">{info?.book_description}</h3>
            {/* <h2>{info?.exp.map()}</h2> */}
            <div className="relative w-fit mx-auto mt-3 z-10">
                <h3 className="flex items-center gap-2 mx-auto w-fit"><span className="font-bold">{info?.price}</span>$</h3>
            </div>
            <Link to={`/book/${info.id}`} className="flex items-center gap-2 mx-auto w-fit bg-yellow-400 p-2 rounded-[8px] my-3 cursor-pointer px-5 py-2 relative z-10">See</Link>
        </div>
    )
}

export default BookCard