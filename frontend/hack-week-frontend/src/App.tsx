import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { Home, Profile, Login } from './components'
import { useEffect, useState } from 'react'

function App() {
  const [title, setTitle] = useState('');
  const [btnNav, setBtnNav] = useState('');
  const [btnName, setBtnName] = useState('');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/home") {
      setTitle("Home");
      setBtnNav("/profile")
      setBtnName("Profile");
    }
    else if (pathname === "/profile") {
      setTitle("Profile")
      setBtnNav("/home")
      setBtnName("Home");
    }
    else {
      setTitle('Looking For Boardgame Group')
    }
  }, [pathname])

  const login = () => {
    navigate("/home");
  }

  return (
    <>
      <header data-theme="coffee" className="fixed top-0 left-0 right-0 z-10">
        <nav className="grid">
          <h2></h2>
          <h2>{title}</h2>
          {pathname !== "/" && <button onClick={() => navigate(btnNav)} className='w-20 h-8 p-0 justify-self-end'>{btnName}</button>}
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Login login={login}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
