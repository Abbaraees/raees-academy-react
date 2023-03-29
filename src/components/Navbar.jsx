import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="nav--logo">
                <NavLink to="/home">Raees Academy</NavLink>
            </div>
            <div className="nav--links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Learn</NavLink>
                <a href="#">Blog</a>
                <a href="#">About</a>
            </div>
            <div className="nav--profile">
                <a href="#"><i className="fa-regular fa-circle-user user-icon"></i></a>
            </div>
        </nav>
    )
}