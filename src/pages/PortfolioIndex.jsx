import { ProjectCardIndex } from '../components/ProjectCardIndex/ProjectCardIndex'
import { portfolioData } from '../assets/data/portfolioData';

const PortfolioIndex = () => {
    return (
        <div id="portfolio_index_container">
            {portfolioData.map((project, index) => (
                <ProjectCardIndex key={`${project.project_title}_${index}`} project={project} />
            )
            )}
        </div>
    )
}

export { PortfolioIndex };