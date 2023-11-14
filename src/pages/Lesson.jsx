import Navbar from "../components/Navbar";
import { NavLink, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiProvider";
import Markdown  from "react-markdown";


export default function Lesson() {
  const {courseId, lessonId, moduleId} = useParams()
  const [lessonContent, setLessonContent] = useState()
  const [lessonsList, setLessonsList] = useState()
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const api = useApi()

  useEffect(() => {
    async function fetchData() {
      try {
        let lessonResponse
        if (lessonId) {
          lessonResponse = await api.get(`/learn/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}/`)
        } else {
          lessonResponse = await api.get(`/learn/courses/${courseId}/modules/${moduleId}/lessons/start`)
        }
        const lessonsListResponse = await api.get(`/learn/courses/${courseId}/modules/${moduleId}/lessons/`)
        if (lessonResponse.ok) {
          const lessonData = lessonResponse.body.data
          setLessonContent(lessonData.content)
          setNextUrl(lessonData.next_url)
          setPrevUrl(lessonData.prev_url)
        } else {
          setLessonContent(null)
          setLessonName(null)
        }

        if (lessonsListResponse.ok) {
          const lessonsListData = lessonsListResponse.body.data
          setLessonsList(
            lessonsListData.map(
              lesson =>
              <NavLink to={`/courses/${courseId}/modules/${moduleId}/lessons/${lesson.id}`}>{lesson.name}</NavLink>
            )
          )
        }
      } catch (error) {
        console.log("Error loading lesson: ", error)
      }

    }

    fetchData()
  }, [lessonId])

  return ( 
    <div>
      <Navbar />
      <div className="lesson-container">
        <div className="side-bar">
          {
            lessonsList === undefined ?
            "Loading..." : lessonsList === null ?
            "Failed to load lessons" : (lessonsList)
          }
        </div>
        <div className="lesson-content">
          <div>
            {
            lessonContent === undefined ? 
            <p>Loading...</p> : lessonContent === null ? 
            <p>Failed to load lesson contents</p> : 
            <Markdown>{lessonContent}</Markdown>
            }
          </div>
          <div className="lessons-nav">
            {prevUrl && <Link to={`${prevUrl}`} className="lessons-links">Previous</Link> }
            {nextUrl && <Link to={`${nextUrl}`} className="lessons-links">Next</Link>}
          </div>
        </div>
      </div>
    </div>
  )
}