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

const Home = () => {
    return (
        <div className="">
            <h1 className="text-center text-[2rem] font-bold">Hello Admin</h1>
            <div className="mt-[50px]">
                <h2 className="font-bold text-white bg-black w-fit p-2 rounded-md my-3">Our Latest Books</h2>
                <div className='books-template'>
                    {books.map((book, i) => <BookCard key={book.id} info={book} index={i}/>)}
                </div>
                <h2 className="font-bold text-white bg-black w-fit p-2 rounded-md my-3">Our Most Active Books</h2> 
                <div className='books-template'>
                    {books.map((book, i) => <BookCard key={book.id} info={book} index={i}/>)}
                </div>             
                <h2 className="font-bold text-white bg-black w-fit p-2 rounded-md my-3">Our Most Active Users</h2>
                <div className='books-template'>
                    {books.map((book, i) => <BookCard key={book.id} info={book} index={i}/>)}
                </div>
                <h2 className="font-bold text-white bg-black w-fit p-2 rounded-md my-3">Number Of Visetors</h2>
                <div className='books-template'>
                    {books.map((book, i) => <BookCard key={book.id} info={book} index={i}/>)}
                </div>
            </div>
        </div>
    )
}

export default Home