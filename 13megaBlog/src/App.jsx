import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

function App() {
  // since we need to see whether we're connected to Appwrite or some other network, so it req some loading time
  // if loading = true show loading icon otherwise show data
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUSer()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-rose-100'>
      <div className='w-full block' >
        <Header />
        <main>
          
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
