import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  // since we need to see whether we're connected to Appwrite or some other network, so it req some loading time
  // if loading = true show loading icon otherwise show data
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        navigate('/signup');
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  const handleSignupClick = () => {
    navigate('/signup');
  }

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-rose-100'>
      <div className='w-full block' >
        <Header />
        <main>
          
        </main>
        <Footer />
        {!authService.getCurrentUser() && (
          <button onClick={handleSignupClick}>Signup</button>
        )}
      </div>
    </div>
  ) : null
}

export default App
