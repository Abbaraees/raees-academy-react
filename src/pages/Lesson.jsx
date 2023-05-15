import Navbar from "../components/Navbar";
import { NavLink, Link, useParams } from "react-router-dom";


export default function Lesson() {
  const {courseId, lessonId} = useParams()

  return ( 
    <div>
      <Navbar />
      <div className="lesson-container">
        <div className="side-bar">
          <NavLink to="/courses/1/1">Lesson 1</NavLink>
          <NavLink to="/courses/1/2">Lesson 2</NavLink>
          <NavLink to="/courses/1/3">Lesson 3</NavLink>
          <NavLink to="/courses/1/4">Lesson 4</NavLink>
          <NavLink to="/courses/1/5">Lesson 5</NavLink>
          <NavLink to="/courses/1/6">Lesson 6</NavLink>
          <NavLink to="/courses/1/7">Lesson 7</NavLink>
          <NavLink to="/courses/1/8">Lesson 8</NavLink>
          <NavLink to="/courses/1/9">Lesson 9</NavLink>
          <NavLink to="/courses/1/10">Lesson 10</NavLink>
        </div>
        <div className="lesson-content">
          <div>
            <h1>Lesson {lessonId}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut reprehenderit officiis? Numquam ut, eaque modi odio eum quibusdam, nobis officia neque provident at itaque reprehenderit ipsum! Illum, enim repudiandae?</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea non culpa sequi quidem porro saepe soluta nesciunt veritatis ullam quia earum possimus, voluptatem corporis repellat nostrum illo laboriosam aspernatur iusto!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum cum iusto non officia modi numquam repellendus saepe laudantium perspiciatis dolorum laboriosam enim alias, quia, minima beatae voluptates deleniti odio?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem quae, sint quisquam suscipit animi quo enim incidunt repudiandae labore doloremque dolorem debitis totam eos hic, et cumque accusamus laborum.</p>
          </div>
          <div className="lessons-nav">
            <Link to="/courses/1/1" className="lessons-links">Previous</Link>
            <Link to="/courses/1/2" className="lessons-links">Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}