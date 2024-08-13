const MainInput = ({ type, placeholder, label }) => {
    return (
        <label>
            <p className="mb-2 font-bold ms-1">{label}</p>
            {type !== 'textarea' && <input type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required min={0}/>}
            {type === 'textarea' && <textarea type={type} placeholder={placeholder} className={'w-full py-[15px] px-[10px] rounded-[10px] shadow-md focus:outline-none'} required rows={7}/>}
        </label>
    )
}

export default MainInput