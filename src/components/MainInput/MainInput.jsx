const MainInput = ({ type, placeholder, label, value, setValue }) => {
    return (
        <label>
            <p className="mb-2 font-bold ms-1">{label}</p>
            {type === 'date' && <input type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required defaultValue={value} onChange={(e) => setValue(new Date(e.target.value).toLocaleDateString('en-CA'))} min={0}/>}
            {type !== 'textarea' && type !== 'date' && <input type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required defaultValue={value} onChange={(e) => setValue(e.target.value)} min={0}/>}
            {type === 'textarea' && type !== 'date' && <textarea type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required defaultValue={value} onChange={(e) => setValue(e.target.value)} rows={7}/>}
        </label>
    )
}

export default MainInput