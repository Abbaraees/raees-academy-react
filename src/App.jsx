import './App.css'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Course from './pages/Course'
import Lesson from './pages/Lesson'
import Blog from './pages/Blog'
import About from './pages/About'
import ApiProvider from './contexts/ApiProvider'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ApiProvider>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/courses/:courseId' element={<Course />} />
            <Route path='/courses/:courseId/modules/:moduleId/lessons/:lessonId' element={<Lesson />} />
            <Route path='/courses/:courseId/modules/:moduleId/lessons/start' element={<Lesson />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to="/home" />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>
      {/* <footer>Copyrights &copy; 2023 Raees Academy</footer> */}
    </div>
  )
}

export default App
