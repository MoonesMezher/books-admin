import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/users/2399f438-0110-48ee-bcfb-f5d32510f29f.jpeg'
import Img2 from '../../assets/images/users/ecd14f7a-3f25-4005-816f-04144842ef9c.jpeg'
import Img3 from '../../assets/images/users/Lakeith Stanfield Is A New Kind Of Romantic Hero.jpeg'
import Img4 from '../../assets/images/users/Profile of girl stock image_ Image of fresh, makeup, elegance - 10187109.jpeg'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/auth/users', {
            headers: {
                Accept: 'application/json',
                Authorization: localStorage.getItem('token'),
            }
        })
            .then(res => {
                setUsers(res.data.users.filter(e => e.active === 1))
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h1 className='underline text-[2rem] font-bold'>Users</h1>
            <table className='w-full mt-[50px]'>
                <thead>
                    <th className='capitalize text-[1.2rem] text-left'>id</th>
                    <th className='capitalize text-[1.2rem] text-left'>picture</th>
                    <th className='capitalize text-[1.2rem] text-left'>name</th>
                    <th className='capitalize text-[1.2rem] text-left'>email</th>
                    <th className='capitalize text-[1.2rem] text-left'>wallet</th>
                    <th className='capitalize text-[1.2rem] text-left'>status</th>
                    <th className='capitalize text-[1.2rem] text-left'>action</th>
                </thead>
                <tbody>
                    {users.map((user, i) => <tr key={i} className={`${i % 2 == 0? 'bg-slate-200':'bg-slate-300'}`}>
                        <td className='py-5 ps-1'>{user.id}</td>
                        <td>
                            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                                <img src={'http://localhost:8000/storage/user/photo/'+user.profilePhoto} alt='..' className='w-full h-full'/>
                            </div>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.wallet}</td>
                        <td>
                            <div className={`${user.active === 0? 'pending': (user.active === 1? 'active':'passive')}`}>{user.active === 0? 'pending': (user.active === 1? 'active':'passive')}</div>
                        </td>
                        <td className=''>
                            <Link className='p-2 rounded-[30px] border-[1px] border-solid border-purple-500 text-purple-500 me-1 duration-300 hover:bg-purple-500 hover:text-white' to={'/user/'+user.id}>View</Link>
                            <Link className='p-2 rounded-[30px] border-[1px] border-solid border-red-500 text-red-500 me-1 duration-300 hover:bg-red-500 hover:text-white' to={'/user/delete/'+user.id}>Delete</Link>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Users