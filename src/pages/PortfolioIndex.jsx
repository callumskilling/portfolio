import { ProjectCardIndex } from '../components/ProjectCardIndex/ProjectCardIndex'
import { portfolioData } from '../assets/data/portfolioData';

const PortfolioIndex = () => {
    return (
        <>
            {portfolioData.map((project, index) => (
                <ProjectCardIndex key={`${project.project_title}_${index}`} project={project} />
            )
            )}
        </>
    )
}

export { PortfolioIndex };