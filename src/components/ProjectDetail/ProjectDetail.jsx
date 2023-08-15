import { Link } from "react-router-dom";
import "./ProjectDetail.css"

const ProjectDetail = (props) => {
    const { project } = props;
    return (
        <>
            <div className="project_detail_container">
                <h1>{project.project_title}</h1>
            </div>
        </>
    )
}

export { ProjectDetail }