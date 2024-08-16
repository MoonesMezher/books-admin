import './App.css'
import './animate.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './layout/Layout'
import ErrorPage from './pages/Error/Error'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Books from './pages/Books/Books'
import AddBook from './pages/AddBook/AddBook'
import Book from './pages/Book/Book'
import BlockUsers from './pages/BlockUsers/BlockUsers'
import Reports from './pages/Reports/Reports'
import { useEffect, useState } from 'react'
import User from './pages/User/User'
import Login from './pages/Login/Login'

function App() {
  const [token, setToken] = useState(
    localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null
  );

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <Layout>
    <Routes>
      <Route path='/' element={token? <Home/>: <Navigate to="/login"/>}/>  
      <Route path='/login' element={!token? <Login setToken={setToken}/>: <Navigate to="/"/>}/>    
      <Route path='/users' element={token? <Users/>: <Navigate to="/login"/>}/>  
      <Route path='/blocklist' element={token? <BlockUsers/>: <Navigate to="/login"/>}/>  
      <Route path='/books' element={token? <Books/>: <Navigate to="/login"/>}/>  
      <Route path='/add-book' element={token? <AddBook/>: <Navigate to="/login"/>}/>  
      <Route path='/edit-book/:id' element={token? <AddBook/>: <Navigate to="/login"/>}/>  
      <Route path='/book/:id' element={token? <Book/>: <Navigate to="/login"/>}/>  
      <Route path='/user/:id' element={token? <User/>: <Navigate to="/login"/>}/>  
      <Route path='/reports' element={token? <Reports/>: <Navigate to="/login"/>}/>  
      <Route path='*' element={<Navigate to={'/error'}/>}/>      
      <Route path='/error' element={<ErrorPage/>}/>      
    </Routes>
    </Layout>
  )
}

export default App
