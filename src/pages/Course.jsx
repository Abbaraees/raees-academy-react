import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Module from "../components/Module";
import data from "../data";


export default function Course() {
  const {courseId} = useParams()
  const course = data.filter(course => course.id == courseId)[0]
  const modules = course.modules.map(module => <Module {...module} key={module.id} />)
  return (
    <>
      <Navbar />
      <section className="course-intro">
        <div className="container">
          <h1 className="course-name">{course.name}</h1>
          <p className="course-description">{course.longDescription}</p>
          <div className="course-stats">
            <p><i className="fa-solid fa-film"></i> 26 Videos</p>
            <p><i className="fa-solid fa-brain"></i> 14 Quizes</p>
            <p><i className="fa-regular fa-clock"></i> 4 Hours</p>
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
          {modules}
        </div>
      </section>
    </>
  )
}