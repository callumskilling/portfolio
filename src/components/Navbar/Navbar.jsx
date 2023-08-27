import { useState } from "react"
import { Link } from "react-router-dom"
import { Burger } from "../Burger/Burger"
import { Code } from "../../assets/images/icons/Code"
import { Nav } from "../Nav/Nav"
import { GoToTop } from "../../utils/GoToTop"
import "./Navbar.css"

const Navbar = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    return (
        <div id="navbar">
            <Link to="/" onClick={GoToTop()}>
                <div id="site_logo">
                    <Code fill="var(--clr-raspberry)" height="3.5rem"/>
                    <h1 id="site_title">Callum Skilling<br /><span id="site_subtitle">Frontend Developer</span></h1>
                </div>
            </Link>
            <Burger navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
            <Nav navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
        </div>
    )
}


export { Navbar }