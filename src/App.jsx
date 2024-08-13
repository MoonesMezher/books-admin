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
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/users' element={<Users/>}/>  
      <Route path='/blocklist' element={<BlockUsers/>}/>  
      <Route path='/books' element={<Books/>}/>  
      <Route path='/add-book' element={<AddBook/>}/>  
      <Route path='/edit-book/:id' element={<AddBook/>}/>  
      <Route path='/book/:id' element={<Book/>}/>  
      <Route path='/reports' element={<Reports/>}/>  
      <Route path='*' element={<Navigate to={'/error'}/>}/>      
      <Route path='/error' element={<ErrorPage/>}/>      
    </Routes>
    </Layout>
  )
}

export default App
