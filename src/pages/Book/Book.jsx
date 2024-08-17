import { Link, useNavigate, useParams } from "react-router-dom"
import Img from '../../assets/images/books/Fuel the Fire by Krista & Becca Ritchie.jpeg'
import { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
    const { id } = useParams();

    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/book/get_book/'+id, {
            headers: {
                Accept: 'application/json',
                Authorization: localStorage.getItem('token'),
            }
        })
            .then(res => {
                console.log(res.data.book)
                setInfo(res.data.book)

            }
                
            )
    }, []);

    const to = useNavigate();

    const handleDelete = () => {
        axios.delete('http://localhost:8000/api/book/', {
            headers: {
                Accept: 'application/json',
                Authorization: localStorage.getItem('token'),
            }
        })
            .then(res => {
                to('/books')
            });
    }

    return (
        <div>
            <h1 className='underline text-[2rem] font-bold'>Book Details</h1>
            <div className="flex gap-[30px] mt-[1.5rem]">
                <div className="overflow-hidden rounded-md w-[400px] h-[400px] mb-[10px] shadow-md">
                    <img src={'http://localhost:8000/storage/book/photo/'+info?.book_image} className="w-full h-full object-cover duration-300"/>
                </div>
                <div className="flex flex-col gap-[20px]">
                    {/* <div className="bg-black text-white rounded-[30px] p-2 w-fit px-5">{info?.category[0]}</div> */}
                    <h2 className="text-[1.5rem] font-bold mb-2">{info?.title}</h2>
                    <h3 className="mb-5">Description: {info?.book_description}</h3>
                    <h3 className="mb-5">Chapters: {info?.chapters_number}</h3>
                    <h3 className="mb-5">Pages: {info?.pages_number}</h3>
                    <h3 className="mb-5">Quantity: {info?.quantity}</h3>
                    <h3 className="mb-5">Visitis: {info?.visits_time}</h3>
                    <h3 className="mb-5">Downloads: {info?.downloads_time}</h3>
                    <h3 className="mb-5">Publication: {info?.publication_date}</h3>
                    {/* <h2>{info?.exp.map()}</h2> */}
                    <div className="relative w-fit">
                        <h3 className="flex items-center gap-2 mx-auto w-fit">Price: <span className="font-bold">{info?.price}</span>$</h3>
                    </div>
                </div>
            </div>
            <div className="flex gap-[40px] mt-[30px] justify-center">
                <Link to={'/edit-book/'+id} className="w-fit block bg-yellow-500 text-white shadow-md px-5 py-2 rounded-md duration-300 hover:scale-105 cursor-pointer">Edit</Link>
                <div className="w-fit bg-red-500 text-white shadow-md px-5 py-2 rounded-md duration-300 hover:scale-105 cursor-pointer" onClick={handleDelete}>Delete</div>
            </div>
        </div>
    )
}

export default Book