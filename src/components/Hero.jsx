import parrotImg from "../assets/parrot-abstract.jpg"

export default function Hero() {
    return (
        <section className="hero">
            <img src={parrotImg} className="hero--img" />
            <h1 className="hero--title">Introduction to Web Development</h1>
            <div className="hero--btns">
                <a href="#">Enroll</a>
                <a href="#">View</a>
            </div>
        </section>
    )
}