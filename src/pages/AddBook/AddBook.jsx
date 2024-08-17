import { useRef, useState } from "react"
import MainInput from "../../components/MainInput/MainInput"
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
    const { id } = useParams();
    
    const inputFile = useRef(null);
    const inputFile2 = useRef(null);

    const [title, setTitle] = useState('');
    const [publisher, setPublisher] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [ISBN, setISBN] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [pagesNumber, setPagesNumber] = useState(0);
    const [chaptersNumber, setChaptersNumber] = useState(0);
    const [downloadSize, setDownloadSize] = useState(0);
    const [bookImage, setBookImage] = useState(null);
    const [bookFile, setBookFile] = useState(null);

    const handleFile = () => {
        inputFile.current.click();
    }
    const handleFile2 = () => {
        inputFile2.current.click();
    }

    const save = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('publisher', publisher);
        formData.append('author', author);
        formData.append('category[0]', category);
        formData.append('ISBN', ISBN);
        formData.append('book_description', bookDescription);
        formData.append('publication_date', publicationDate);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('pages_number', pagesNumber);
        formData.append('chapters_number', chaptersNumber);
        formData.append('download_size', downloadSize);
        formData.append('book_image', bookImage);
        formData.append('book_file', bookFile);
        
        if(id) {
            const data = {
                id
            }
            axios.put('http://localhost:8000/api/book/update', data, {
                headers: {
                    Accept: 'application/json',
                    Authorization: localStorage.getItem('token')
                }
        ``})
                .then(res => {

                })
                .catch(err => {
                    
                })
                .finally()
        } else {
            axios.post('http://localhost:8000/api/book/add', formData, {
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'multipart/form-data',
                    Authorization: localStorage.getItem('token')
                }
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally()
        }
    }

    return (
        <div>
            <h1 className='underline text-[2rem] font-bold'>Add New Book</h1>
            <form className="mt-[20px] flex flex-col gap-5">
                <MainInput type={'text'} placeholder={'Book Title'} value={title}  setValue={setTitle} label={'Title'}/>
                <MainInput type={'text'} placeholder={'Book Category'} value={category}  setValue={setCategory} label={'Category'}/>
                <MainInput type={'text'} placeholder={'Author Name'} value={author}  setValue={setAuthor} label={'Author Name'}/>
                <MainInput type={'text'} placeholder={'ISBN'} value={ISBN}  setValue={setISBN} label={'ISBN'}/>
                <MainInput type={'text'} placeholder={'Publisher'} value={publisher}  setValue={setPublisher} label={'Publisher'}/>
                <MainInput type={'number'} placeholder={'Book Price'} value={price}  setValue={setPrice} label={'Price'}/>
                <MainInput type={'number'} placeholder={'Book Quantity'} value={quantity}  setValue={setQuantity} label={'Quantity'}/>
                <MainInput type={'number'} placeholder={'Book Pages Number'} value={pagesNumber}  setValue={setPagesNumber} label={'Pages Number'}/>
                <MainInput type={'number'} placeholder={'Book Chapters Number'} value={chaptersNumber}  setValue={setChaptersNumber} label={'Chapters Number'}/>
                <MainInput type={'number'} placeholder={'Download Size'} value={downloadSize}  setValue={setDownloadSize} label={'Download Size'}/>
                <MainInput type={'date'} placeholder={'Date'} value={publicationDate}  setValue={setPublicationDate} label={'Publication Date'}/>
                <div>
                    <input type="file" onChange={(e) => setBookImage(e.target.files[0])} ref={inputFile} className="hidden"/>
                    <div>
                        <p className="mb-2 font-bold ms-1">Image</p>
                        <div onClick={handleFile} className="shadow-md bg-white w-fit p-[10px] rounded-[10px] cursor-pointer flex items-center gap-3 flex-row-reverse"><FaPlus/>Choose File</div>
                    </div>
                </div>
                <div>
                    <input type="file"  onChange={(e) => setBookFile(e.target.files[0])} ref={inputFile2} className="hidden"/>
                    <div>
                        <p className="mb-2 font-bold ms-1">PDF</p>
                        <div onClick={handleFile2} className="shadow-md bg-white w-fit p-[10px] rounded-[10px] cursor-pointer flex items-center gap-3 flex-row-reverse"><FaPlus/>Choose File</div>
                    </div>
                </div>
                <MainInput type={'textarea'} placeholder={'Book Description'} defaultValue={bookDescription} setValue={setBookDescription} label={'Description'}/>
            </form>
            <div className="mx-auto font-bold text-white bg-black w-fit p-3 px-10 rounded-md my-5 cursor-pointer duration-300 hover:bg-white hover:text-black border-[1px] border-black hover:border-solid" onClick={save}>Save</div>
        </div>
    )
}

export default AddBook