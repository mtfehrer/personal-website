import "./Projects.css";
import Project from "../Project/Project";

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <Project
                title="Tower Defense Game"
                description="Lorem ipsum"
                image="tower defense game.png"
            />
            <Project
                title="Tower Defense Game"
                description="Lorem ipsum"
                image="tower defense game.png"
            />
            <Project
                title="Tower Defense Game"
                description="Lorem ipsum"
                image="tower defense game.png"
            />
        </div>
    );
};

export default Projects;
