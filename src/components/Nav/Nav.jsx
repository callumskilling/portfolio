import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'
import "./Nav.css"

const Nav = ({ navMenuOpen, setNavMenuOpen }) => {
    const handleClick = () => {
        setNavMenuOpen(false);
    }

    return (
        <>
            <nav id="nav_links" data-visible={navMenuOpen}>
                <ul>
                    <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={handleClick}>Portfolio</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export { Nav }

Nav.propTypes = {
    navMenuOpen: PropTypes.bool,
    setNavMenuOpen: PropTypes.func
}