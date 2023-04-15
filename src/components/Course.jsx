import { Link } from "react-router-dom"

export default function Course(props) {
    return (
        <div className="course">
            <h1 className="course--name">{props.name}</h1>
            <p className="course--description">{props.description}</p>
            {   props.enrolled && <>
                <div className="course--progressbar">
                <div className="course--progress" style={{width: props.progress+"%"}}>
                </div>
                </div>
                <Link className="course--resume-btn" to={`/courses/${props.id}`}>RESUME</Link>
            </>
            }
            {
                !props.enrolled &&
                <Link className="course--resume-btn" to={`/courses/${props.id}`}>VIEW COURSE</Link>
            }
        </div>
    )
}