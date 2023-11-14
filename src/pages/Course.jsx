import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Module from "../components/Module";
import { useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";


export default function Course() {
  const {courseId} = useParams()
  const [course, setCourse] = useState()
  const [modules, setModules] = useState()
  const api = useApi()
  
  useEffect(() => {
    // Define an async function to fetch the course and modules
    const fetchData = async () => {
      try {
        // Fetch the course data based on the courseId
        const courseResponse = await api.get(`/learn/courses/${courseId}`);
        if (courseResponse.ok) {
          let courseData = courseResponse.body.data
          setCourse(courseData)
        } else {
          setCourse(null)
        }

      } catch (error) {
        console.error('Error fetching course:', error);
        // Handle error if needed, e.g., set an error state.
      }

      try {
        const modulesResponse = await api.get(`/learn/courses/${courseId}/modules/`);
        if (modulesResponse.ok) {
          const modulesData = modulesResponse.body.data;
          setModules(modulesData.map(module => <Module key={module.id} courseId={courseId} {...module}/>));
        } else {
          setModules(null)
        }
      } catch (error) {
        console.log("Error fetching modules:", error)
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The useEffect will run whenever courseId changes



  return (
    <>
      <Navbar />
      <section className="course-intro">
        {course === undefined ? (
          <p>Loading...</p>
        ) : course === null ? (
          <p>Failed to load course</p>
        ) : (
          <div className="container">
            <h1 className="course-name">{course.name}</h1>
            <p className="course-description">{course.long_description}</p>
            <div className="course-stats">
              <p>
                <i className="fa-solid fa-film"></i> 26 Videos
              </p>
              <p>
                <i className="fa-solid fa-brain"></i> 14 Quizzes
              </p>
              <p>
                <i className="fa-regular fa-clock"></i> 4 Hours
              </p>
            </div>
            {course.enrolled ? (
              <button className="enroll-btn">Unenroll</button>
            ) : (
              <button className="enroll-btn">Enroll</button>
            )}
          </div>
        )}
      </section>
      <section className="course-contents">
        <div className="container" >
          {modules === undefined ? (
            <p>Loading...</p>
          ): modules === null ? (
            <p className="error-msg">Failed to load modules</p>
          ) : modules }
        </div>
      </section>
    </>
  )
}