import { useState } from "react"
import { Link } from "react-router-dom"
import { Burger } from "../Burger/Burger"
import { Nav } from "../Nav/Nav"
import { GoToTop } from "../../utils/GoToTop"
import "./Navbar.css"

const Navbar = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    return (
        <div id="navbar">
            <Link to="/" onClick={GoToTop()}>
                <p>Callum Skilling</p>
            </Link>
            <Burger navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
            <Nav navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
        </div>
    )
}


export { Navbar }