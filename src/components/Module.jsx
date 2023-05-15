import { Link } from "react-router-dom";


export default function Module(props) {
    return (
        <div className="module">
            <h2 className="module-name">{props.name}</h2>
            <Link to={`/courses/${props.id}/1`}>
              <p className="module-description">{props.description}</p>
            </Link>
            <div className="course-stats">
              <p><i className="fa-solid fa-film"></i> {props.videos} Videos</p>
              <p><i className="fa-solid fa-brain"></i> {props.quiz} Quizes</p>
              <p><i className="fa-regular fa-clock"></i> {props.hours} Hours</p>
            </div>
         </div>
    )

}