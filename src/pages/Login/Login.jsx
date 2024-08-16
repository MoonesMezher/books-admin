import { useState } from 'react'
import MainInput from "../../components/MainInput/MainInput"
import Img from '../../assets/images/logo.jpg'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading'
import axios from 'axios'

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const to = useNavigate();

    const handleLogin = () => {
        const data = {
            email,
            password,
            phoneNumber: phone
        }

        setLoading(true)

        axios.post('http://localhost:8000/api/auth/login', data, {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => {
                setToken('Bearer ' + res.data.access_token)
                localStorage.setItem('token', 'Bearer ' + res.data.access_token)
                to('/')
            })
            .catch(err => {
                console.log(err)
            })
            .finally(
                setLoading(false)
            )
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col relative">
            <h1 className='w-[100px] h-[100px] mx-auto overflow-hidden rounded-full mb-5'>
                <img src={Img} alt="logo" className="w-full h-full object-cover"/>
            </h1>
            <div className="bg-white shadow-md rounded-md p-5 w-[500px] flex flex-col gap-5">
                <MainInput type={'text'} placeholder={'Your Email'} value={email} setValue={setEmail} label={'Email'}/>
                <MainInput type={'text'} placeholder={'Your Password'} value={password} setValue={setPassword} label={'Password'}/>
                <MainInput type={'text'} placeholder={'Your Phone Number'} value={phone} setValue={setPhone} label={'Phone Number'}/>
                <div className="mx-auto font-bold text-white bg-black w-fit p-3 px-10 rounded-md my-5 cursor-pointer duration-300 hover:bg-white hover:text-black border-[1px] border-black hover:border-solid" onClick={handleLogin}>Login</div>
            </div>
            {loading && 
                <Loading/>
            }
        </div>
    )
}

export default Login