import { useRef } from "react"
import MainInput from "../../components/MainInput/MainInput"
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

const AddBook = () => {
    const { id } = useParams();
    
    const inputFile = useRef(null);

    const handleFile = () => {
        inputFile.current.click();
    }

    return (
        <div>
            <h1 className='underline text-[2rem] font-bold'>Add New Book</h1>
            <form className="mt-[20px] flex flex-col gap-5">
                <MainInput type={'text'} placeholder={'Book Title'} label={'Title'}/>
                <MainInput type={'text'} placeholder={'Book Type'} label={'Type'}/>
                <MainInput type={'text'} placeholder={'Author Name'} label={'Author Name'}/>
                <MainInput type={'number'} placeholder={'Book Price'} label={'Price'}/>
                <MainInput type={'number'} placeholder={'Book Offer'} label={'Offer'}/>
                <div>
                    <input type="file" ref={inputFile} className="hidden"/>
                    <div>
                        <p className="mb-2 font-bold ms-1">Image</p>
                        <div onClick={handleFile} className="shadow-md bg-white w-fit p-[10px] rounded-[10px] cursor-pointer flex items-center gap-3 flex-row-reverse"><FaPlus/>Choose File</div>
                        <div className="w-[200px] h-[200px]">
                            <img src={''} alt="img" className="my-5 w-full h-full rounded-md"/>
                        </div>
                    </div>
                </div>
                <MainInput type={'textarea'} placeholder={'Book Description'} label={'Description'}/>
            </form>
            <div className="mx-auto font-bold text-white bg-black w-fit p-3 px-10 rounded-md my-5 cursor-pointer duration-300 hover:bg-white hover:text-black border-[1px] border-black hover:border-solid">Save</div>
        </div>
    )
}

export default AddBook