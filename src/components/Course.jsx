export default function Course(props) {
    return (
        <div className="course">
            <h1 className="course--name">{props.name}</h1>
            {   props.enrolled && <>
                <div className="course--progressbar">
                <div className="course--progress" style={{width: props.progress+"%"}}>
                </div>
                </div>
                <button className="course--resume-btn">RESUME</button>
            </>
            }
            {!props.enrolled && <button className="course--resume-btn">VIEW COURSE</button>}
        </div>
    )
}