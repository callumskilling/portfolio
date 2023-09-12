import { portfolioData } from '../../assets/data/portfolioData';
import "./ProjectDetailNav.css"
import {ArrowBack} from "../../assets/images/icons/ArrowBack";
import {ArrowForward} from "../../assets/images/icons/ArrowForward";
import { Link } from 'react-router-dom';
import { GoToTop } from '../../utils/GoToTop';

const ProjectDetailNav = (props) => {
    const { project } = props;
    const projectIndex = portfolioData.findIndex(element => project.project_index === element.project_index);
    const numProjects = Object.keys(portfolioData).length

    const previousProject = (projectIndex) => {
        if ((projectIndex - 1) < 0) {
            return portfolioData[numProjects - 1]
        } else {
            return portfolioData[projectIndex - 1]
        }
    }

    const nextProject = (projectIndex) => {
        if ((projectIndex + 1) >= numProjects) {
            return portfolioData[0]
        } else {
            return portfolioData[projectIndex + 1]
        }
    }
    return (
        <>
            <div className="project_detail_nav_container">
                <div className="previous_project_container project_nav_button">
                    <Link to={`/portfolio/${previousProject(projectIndex).project_index}`} className='project_link prev_project_link' onClick={GoToTop()}>
                        <ArrowBack height="2rem" fill="var(--clr-raspberry)"/>
                        <div className="prev_nav_text nav_text">
                            <h3>{previousProject(projectIndex).project_title}</h3>
                            <p className='body1 project_nav_button_subtitle'>Previous Project</p>
                        </div>
                    </Link>
                </div>

                <div className="next_project_container project_nav_button">
                    <Link to={`/portfolio/${nextProject(projectIndex).project_index}`} className='project_link next_project_link' onClick={GoToTop()}>
                        <ArrowForward height="2rem" fill="var(--clr-raspberry)"/>
                        <div className="next_nav_text nav_text">
                            <h3>{nextProject(projectIndex).project_title}</h3>
                            <p className='body1 project_nav_button_subtitle'>Next Project</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export { ProjectDetailNav }