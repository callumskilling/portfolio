import { Link } from "react-router-dom";
import "./ProjectDetail.css"

const ProjectDetail = (props) => {
    const { project } = props;
    const { hero_desktop, hero_desktop_2x, hero_tablet, hero_tablet_2x, hero_mobile, hero_mobile_2x } = project.image_paths.detail_hero;
    const { preview1_desktop, preview1_desktop_2x, preview1_tablet, preview1_tablet_2x, preview1_mobile, preview1_mobile_2x } = project.image_paths.preview1;
    const { preview2_desktop, preview2_desktop_2x, preview2_tablet, preview2_tablet_2x, preview2_mobile, preview2_mobile_2x } = project.image_paths.preview2;

    return (
        <>
            <div id="project_detail_page_container">
                <picture className="project_detail_hero_image">
                    <source media="(min-width: 1440px)"
                        srcSet={`${hero_desktop} 1110w, ${hero_desktop_2x} 2220w`}
                    />
                    <source media="(min-width: 768px)"
                        srcSet={`${hero_tablet} 688w, ${hero_tablet_2x} 1376w`}
                    />
                    <source srcSet={`${hero_mobile} 311w, ${hero_mobile_2x} 622w`}
                    />
                    <img src={`${hero_desktop_2x}`} alt={`Screenshot of ${project.project_title} project`} />
                </picture>
                <div className="project_detail_container">
                    <div className="project_info_wrapper">
                        <div className="project_info">
                            <h1>{project.project_title}</h1>
                            <p className="body2">{project.project_description}</p>
                            <div className="tags_wrapper">
                                <p className="body2" id="project_tags">{project.project_tags}</p>
                                <p className="body2" id="language_tags">{project.language_tags}</p>
                            </div>
                            <Link to={project.project_code_url}><div className="simple_link">View Code</div></Link>
                            <Link to={project.project_live_url}><div className="simple_link">Visit Website</div></Link>
                        </div>
                    </div>
                    <div className="project_background">
                        <h2>Project Background</h2>
                        <p className="body2">{project.project_background}</p>
                    </div>
                    <div className="static_previews">
                        <h2>Static Previews</h2>
                        <picture className="project_preview_image">
                            <source media="(min-width: 1440px)"
                                srcSet={`${preview1_desktop} 1110w, ${preview1_desktop_2x} 2220w`}
                            />
                            <source media="(min-width: 768px)"
                                srcSet={`${preview1_tablet} 688w, ${preview1_tablet_2x} 1376w`}
                            />
                            <source srcSet={`${preview1_mobile} 311w, ${preview1_mobile_2x} 622w`}
                            />
                            <img src={`${preview1_desktop_2x}`} alt={`Screenshot of ${project.project_title} project`} />
                        </picture>
                        <picture className="project_preview_image">
                            <source media="(min-width: 1440px)"
                                srcSet={`${preview2_desktop} 1110w, ${preview2_desktop_2x} 2220w`}
                            />
                            <source media="(min-width: 768px)"
                                srcSet={`${preview2_tablet} 688w, ${preview2_tablet_2x} 1376w`}
                            />
                            <source srcSet={`${preview2_mobile} 311w, ${preview2_mobile_2x} 622w`}
                            />
                            <img src={`${preview2_desktop_2x}`} alt={`Screenshot of ${project.project_title} project`} />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProjectDetail }