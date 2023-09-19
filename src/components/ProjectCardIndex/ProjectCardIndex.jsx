import { Link } from "react-router-dom";
import { GoToTop } from "../../utils/GoToTop"
import "./ProjectCardIndex.css"
import { ImageComponent } from "../ImageComponent/ImageComponent";

const ProjectCardIndex = (props) => {
    const { project } = props;

    return (
        <>
            <div className="project_card_index_container">
                <ImageComponent className="project_card_index_image_wrapper" imageInfo={project.project_images.thumbnail} />
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
