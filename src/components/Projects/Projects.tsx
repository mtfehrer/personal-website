import "./Projects.css";

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="project-container">
                <img
                    className="project-image"
                    src="tower defense game.png"
                    alt="tower defense game"
                ></img>
            </div>
            <div className="project-container">
                Hello
                <img
                    className="project-image"
                    src="tower defense game.png"
                    alt="tower defense game"
                ></img>
            </div>
            <div className="project-container">
                Hello
                <img
                    className="project-image"
                    src="tower defense game.png"
                    alt="tower defense game"
                ></img>
            </div>
        </div>
    );
};

export default Projects;
