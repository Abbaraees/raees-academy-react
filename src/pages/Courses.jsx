import Navbar from "../components/Navbar"
import Course from "../components/Course"
import data from "../data"


export default function Courses() {
    const allCourses = data.map(item => {
        return (
            <Course key={item.id} {...item} />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section className="page-hero">
                <h1>Courses</h1>
                <p>
                    Our courses are designed to help learners acquire new skills and advance in their careers.
                    We offer courses in a range of topics, including programming, web development,
                    data science, Linux command line, and more. Our flexible learning options allow
                    you to learn at your own pace and on your own time, and our resources and tools
                    ensure that you have the support you need to succeed. Browse our course offerings
                    today and start your journey towards mastering new skills and achieving your career goals!
                </p>
            </section>
            <div className="filter-section">
                <h3>Filter by</h3>
                <div className="filters">
                    <form action="">
                        <select name="" id="">
                            <option value="1">Topic</option>
                        </select>
                        <select name="" id="">
                            <option value="1">Field</option>
                        </select>
                        <select name="" id="">
                            <option value="1">Difficulty</option>
                        </select>
                        <select name="" id="">
                            <option value="1">Duration</option>
                        </select>
                        <select name="" id="">
                            <option value="1">Price</option>
                        </select>
                        <select name="" id="">
                            <option value="1">Sort By</option>
                        </select>
                    </form>
                </div>
            </div>
            <section className="section">
                <div className='courses'>
                    { allCourses }
                </div>
            </section>
        </div>
    )
}
