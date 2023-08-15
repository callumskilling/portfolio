import { useParams } from "react-router-dom";
import { portfolioData } from '../assets/data/portfolioData';
import { ProjectDetail } from "../components/ProjectDetail/ProjectDetail";




const PortfolioDetail = () => {
    const { projectName } = useParams();
    const project = portfolioData.find(project => projectName === project.project_index);
    if (project) {
        return (
            <>
                <ProjectDetail project={project}/>
            </>
        )        
    } else {
        return (
            <>
                <h1>NOT FOUND</h1>
            </>
        )
    }

}

export { PortfolioDetail };