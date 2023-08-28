import { GoToTop } from "../../utils/GoToTop"
import { Link } from "react-router-dom"
import { Code } from "../../assets/images/icons/Code"
import { Linkedin } from "../../assets/images/icons/Linkedin"
import { Github } from "../../assets/images/icons/Github"

import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <ul id="secondary_navigation">
                <div id="secondary_navigation_icon">
                    <li>
                        <Link to="/" onClick={GoToTop()}>
                            <Code fill="var(--clr-raspberry)" height="2rem" />
                        </Link>
                    </li>
                </div>
                <div id="secondary_navigation_text_wrapper">
                    <li><Link to="/" onClick={GoToTop()}>Home</Link></li>
                    <li><Link to="/portfolio" onClick={GoToTop()}>Portfolio</Link></li>
                </div>
                <div id="socials">
                    <li><a href="https://github.com/callumskilling" target="_blank" rel="noreferrer"><Github fill="var(--clr-raspberry)" height="2rem" /></a></li>
                    <li><a href="https://www.linkedin.com/in/callumskilling/" target="_blank" rel="noreferrer"><Linkedin fill="var(--clr-raspberry" height="2rem" /></a></li>
                </div>
            </ul>
        </>
    )
}