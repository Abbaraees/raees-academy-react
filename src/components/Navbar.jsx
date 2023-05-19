import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="nav--logo">
                <Link to="/home">Raees Academy</Link>
            </div>
            <div className="nav--links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Learn</NavLink>
                <NavLink to="/blog">Blog</NavLink>    
                <NavLink to="/about">About</NavLink>
            </div>
            <div className="nav--profile">
                <a href="#"><i className="fa-regular fa-circle-user user-icon"></i></a>
            </div>
        </nav>
    )
}