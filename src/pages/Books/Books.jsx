import { Link } from 'react-router-dom'
import Img1 from '../../assets/images/books/8 Sweet YA Friends to Lovers Romance Books _ Book Riot.jpeg'
import Img2 from '../../assets/images/books/Fuel the Fire by Krista & Becca Ritchie.jpeg'
import Img3 from '../../assets/images/books/The Fine Print Special Edition (Dreamland Billionaires, 1)_ Asher, Lauren_ 9781737507710_ Amazon____.jpeg'
import Img4 from '../../assets/images/books/Things We Never Got Over.jpeg'
import Img5 from '../../assets/images/books/Twisted Lies.jpeg'
import BookCard from '../../components/BookCard/BookCard'

const books = [
    {
        id: 1,
        type: 'story',
        title: 'The world',
        subtitle: 'Now you can discover thsi world with some awarness',
        img: Img1,
        offer: 200,
        price: 110
    },
    {
        id: 2,
        type: 'sience',
        title: 'The map',
        subtitle: 'Now you can discover thsi world with some awarness',
        img: Img2,
        offer: 300,
        price: 110
    },
    {
        id: 3,
        type: 'story',
        title: 'The world',
        subtitle: 'Now you can discover thsi world with some awarness',
        img: Img3,
        offer: 200,
        price: 110
    },
    {
        id: 4,
        type: 'story',
        title: 'The world',
        subtitle: 'Now you can discover thsi world with some awarness',
        img: Img4,
        offer: 200,
        price: 110
    },
    {
        id: 5,
        type: 'story',
        title: 'The world',
        subtitle: 'Now you can discover thsi world with some awarness',
        img: Img5,
        offer: 200,
        price: 110
    },
]

const Books = () => {
  return (
    <div>
        <h1 className='underline text-[2rem] font-bold'>Books</h1>
        <Link to={'/add-book'} className="block font-bold text-white bg-black w-fit p-2 rounded-md my-5 cursor-pointer duration-300 hover:bg-white hover:text-black border-[1px] border-black hover:border-solid">Add Book</Link>
        <div className='books-template'>
            {books.map((book, i) => <BookCard key={book.id} info={book} index={i}/>)}
        </div>
    </div>
  )
}

export default Books