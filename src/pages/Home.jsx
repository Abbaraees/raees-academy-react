import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Course from '../components/Course'
import data from '../data'

export default function Home() {
    const myCourses = data.filter(item => item.enrolled).map(item => {
        return (
            <Course key={item.id} {...item} />
        )
    })
    const allCourses = data.map(item => {
        return (
            <Course key={item.id} {...item} />
        )
    })
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
                    {myCourses}
                </div>
            </section>
            <section className='all-courses-section section'>
                <div className='section-heading'>
                        <h1>All Courses</h1>
                        <a href="#">VIEW ALL</a>
                </div>
                <div className='courses'>
                    { allCourses }
                </div>
            </section>
        </div>
    )
}