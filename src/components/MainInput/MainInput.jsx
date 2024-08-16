const MainInput = ({ type, placeholder, label, value, setValue }) => {
    return (
        <label>
            <p className="mb-2 font-bold ms-1">{label}</p>
            {type !== 'textarea' && <input type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required defaultValue={value} onChange={(e) => setValue(e.target.value)} min={0}/>}
            {type === 'textarea' && <textarea type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required defaultValue={value} onChange={(e) => setValue(e.target.value)} rows={7}/>}
        </label>
    )
}

export default MainInput