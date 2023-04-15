import './App.css'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Course from './pages/Course'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/courses/:courseId' element={<Course />} />
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
      <footer>Copyrights &copy; 2023 Raees Academy</footer>
    </div>
  )
}

export default App
