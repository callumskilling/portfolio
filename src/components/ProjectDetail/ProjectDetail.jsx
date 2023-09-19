import { Link } from "react-router-dom";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import "./ProjectDetail.css"

const ProjectDetail = (props) => {
    const { project } = props;

    return (
        <>
            <div className="project_detail_page_container">
                <ImageComponent className="project_detail_hero_image_wrapper" imageInfo={project.project_images.hero} />
                <div className="project_detail_container">
                    <div className="project_detail_info_wrapper">
                        <div className="project_detail_project_info">
                            <h1>{project.project_title}</h1>
                            <p className="body2">{project.project_description}</p>
                            <div className="project_detail_tags_wrapper">
                                <p className="project_detail_project_tags">{project.project_tags}</p>
                                <p className="project_detail_language_tags">{project.language_tags}</p>
                            </div>
                            <Link to={project.project_code_url}><div className="simple_link">View Code</div></Link>
                            <Link to={project.project_live_url}><div className="simple_link">Visit Website</div></Link>
                        </div>
                    </div>
                    <div className="project_detail_background">
                        <h2>Project Background</h2>
                        <p className="body2">{project.project_background}</p>
                    </div>
                    <div className="project_detail_static_previews">
                        <h2>Static Previews</h2>
                        <ImageComponent className="project_detail_preview_image_wrapper" imageInfo={project.project_images.preview1} />
                        <ImageComponent className="project_detail_preview_image_wrapper" imageInfo={project.project_images.preview2} />
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProjectDetail }