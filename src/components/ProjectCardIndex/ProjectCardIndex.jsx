import { Link } from "react-router-dom";
import { GoToTop } from "../../utils/GoToTop"
import "./ProjectCardIndex.css"

const ProjectCardIndex = (props) => {
    const {project} = props;
    const { thumbnail_desktop, thumbnail_desktop_2x, thumbnail_tablet, thumbnail_tablet_2x, thumbnail_mobile, thumbnail_mobile_2x } = project.image_paths.thumbnail;

    return (
        <>
            <div className="project_card_index_container">
                <picture className="project_card_index_image">
                    <source media="(min-width: 1440px)" srcSet={`${thumbnail_desktop} 540w, ${thumbnail_desktop_2x} 1080w`} />
                    <source media="(min-width: 768px)" srcSet={`${thumbnail_tablet} 339w, ${thumbnail_tablet_2x} 678w`} />
                    <source srcSet={`${thumbnail_mobile} 311w, ${thumbnail_mobile_2x} 622w`} />
                    <img src={`${thumbnail_desktop_2x}`} alt={`Screenshot of ${project.project_title} project`} />
                </picture>
                <div className="project_card_index_project_info">
                    <h1 className="project_card_index_project_title">{project.project_title}</h1>
                    <p className="body2">{project.project_description}</p>
                    <Link to={`/portfolio/${project.project_index}`} onClick={GoToTop}><div className="simple_link">VIEW PROJECT</div></Link>                    
                </div>
            </div>
        </>
    )
}

export { ProjectCardIndex }