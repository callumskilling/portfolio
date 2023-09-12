import { Link } from "react-router-dom"
import { TechBundle } from "../../assets/images/icons/TechBundle"
import { GoToTop } from "../../utils/GoToTop"
import "./Blurb.css"




export const Blurb = () => {
  return (
    <div id="blurb_container">
      <div id="blurb_wrapper">
        <h2 id="blurb_title">About</h2>
        <p>I build dynamic websites using HTML, CSS, and JavaScript. I have completed the Front-End Engineer career path on codecademy.com, where I learned how to apply basic design theory, use the command line, and work with front-end frameworks like React and Redux. I have also completed several projects that demonstrate my ability to create responsive, interactive, and user-friendly web applications.</p><br />
        <p>I am passionate about learning new technologies and improving my skills as a front-end engineer. I am always looking for new challenges and opportunities to create amazing websites that solve real-world problems.</p>
        <Link to="/portfolio" onClick={GoToTop}><div className="simple_link inverse_link mar_block_1">Check Out Portfolio</div></Link>
      </div>
      <TechBundle id="tech_bundle" />
    </div>
  )
}