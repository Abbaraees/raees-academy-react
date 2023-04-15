import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import data from "../data";


export default function Course() {
  const {courseId} = useParams()
  const course = data.filter(course => course.id == courseId)[0]
  return (
    <>
      <Navbar />
      <section className="course-intro">
        <div className="container">
          <h1 className="course-name">{course.name}</h1>
          <p className="course-description">{course.longDescription}</p>
          <div className="course-stats">
            <p><i className="fa-solid fa-film"></i> 26 Videos</p>
            <p><i class="fa-solid fa-brain"></i> 14 Quizes</p>
            <p><i class="fa-regular fa-clock"></i> 4 Hours</p>
          </div>
          {
            course.enrolled ?
            <button className="enroll-btn">UNENROLL</button> :
            <button className="enroll-btn">Enroll</button>
          }
        </div>   
      </section>
      <section className="course-contents">
        <div className="container" >
          <div className="lesson" onClick={() => window.location = '/'}>
            <h2 className="lesson-name">Module 1</h2>
            <p className="lesson-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex doloremque debitis rerum facilis consequatur animi rem quaerat vero fuga? Tenetur voluptates aliquam natus ea cupiditate at sunt a quae?</p>
            <div className="course-stats">
              <p><i className="fa-solid fa-film"></i> 26 Videos</p>
              <p><i class="fa-solid fa-brain"></i> 14 Quizes</p>
              <p><i class="fa-regular fa-clock"></i> 4 Hours</p>
            </div>
         </div>
         <div className="lesson">
            <h2 className="lesson-name">Module 2</h2>
            <p className="lesson-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex doloremque debitis rerum facilis consequatur animi rem quaerat vero fuga? Tenetur voluptates aliquam natus ea cupiditate at sunt a quae?</p>
            <div className="course-stats">
              <p><i className="fa-solid fa-film"></i> 26 Videos</p>
              <p><i class="fa-solid fa-brain"></i> 14 Quizes</p>
              <p><i class="fa-regular fa-clock"></i> 4 Hours</p>
            </div>
         </div>
         <div className="lesson">
            <h2 className="lesson-name">Module 3</h2>
            <p className="lesson-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex doloremque debitis rerum facilis consequatur animi rem quaerat vero fuga? Tenetur voluptates aliquam natus ea cupiditate at sunt a quae?</p>
            <div className="course-stats">
              <p><i className="fa-solid fa-film"></i> 26 Videos</p>
              <p><i class="fa-solid fa-brain"></i> 14 Quizes</p>
              <p><i class="fa-regular fa-clock"></i> 4 Hours</p>
            </div>
         </div>
         <div className="lesson">
            <h2 className="lesson-name">Module 4</h2>
            <p className="lesson-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex doloremque debitis rerum facilis consequatur animi rem quaerat vero fuga? Tenetur voluptates aliquam natus ea cupiditate at sunt a quae?</p>
            <div className="course-stats">
              <p><i className="fa-solid fa-film"></i> 26 Videos</p>
              <p><i class="fa-solid fa-brain"></i> 14 Quizes</p>
              <p><i class="fa-regular fa-clock"></i> 4 Hours</p>
            </div>
         </div>
        </div>
      </section>
    </>
  )
}