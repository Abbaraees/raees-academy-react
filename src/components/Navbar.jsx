export default function Navbar() {
    return (
        <nav>
            <div className="nav--logo">
                <a href="#">Raees Academy</a>
            </div>
            <div className="nav--links">
                <a href="#">Home</a>
                <a href="#">Learn</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
            </div>
            <div className="nav--profile">
                <a href="#"><i className="fa-regular fa-circle-user user-icon"></i></a>
            </div>
        </nav>
    )
}