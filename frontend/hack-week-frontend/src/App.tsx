import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Profile } from './components'

function App() {


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <nav className="nav"><h2>Looking For Boardgame Group</h2></nav>
      </header>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
