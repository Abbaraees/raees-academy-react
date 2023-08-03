import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Course from '../components/Course'
import data from '../data'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useApi } from '../contexts/ApiProvider'

export default function Home() {
    const api = useApi()
    const [allCourses, setAllCourses] = useState()
    const [myCourses, setMyCourses] = useState()

    useEffect(() => {
        (async () => {
            const response = await api.get('/courses')
            if (response.ok) {
                let courses = response.body.data
                setAllCourses(courses.map((course) => <Course key={course.id} {...course} />))
            } else {
                setAllCourses(null)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const response = await api.get('/courses/enrolled')
            if (response.ok) {
                let courses = response.body.data
                setMyCourses(courses.map((course) => <Course key={course.id} {...course} />))
            } else {
                setMyCourses(null)
            }
        })()
    }, [])


    // const myCourses = data.filter(item => item.enrolled).map(item => {
    //     return (
    //         <Course key={item.id} {...item} />
    //     )
    // })
   
    return (
        <div>
            <Navbar />
            <Hero />
            <section className='my-courses-section section'>
                <div className='section-heading'>
                    <h1>My Courses</h1>
                    <a href="#">VIEW ALL</a>
                </div>
                <div className='courses'>
                    {myCourses ? myCourses : <p>failed to load courses</p>}
                </div>
            </section>
            <section className='all-courses-section section'>
                <div className='section-heading'>
                        <h1>All Courses</h1>
                        <NavLink to="/courses">VIEW ALL</NavLink>
                </div>
                <div className='courses'>
                    { allCourses ? allCourses : <p>Loading courses</p> }
                </div>
            </section>
        </div>
    )
}