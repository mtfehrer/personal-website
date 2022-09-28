import "./Projects.css";
import Project from "../Project/Project";

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <Project
                title="Tower Defense Game"
                description="Built with React and Typescript"
                image="tower defense.gif"
                alt="tower defense game"
            />
            <Project
                title="2D Shooter Game"
                description="Developed with the pygame engine in python"
                image="shooter game2.gif"
                alt="2D Shooter Game"
            />
            <Project
                title="Forum Website"
                description="Built with the MERN stack"
                image="forum site.png"
                alt="forum website"
            />
            <Project
                title="Pokemon Battle"
                description="Created using the curses module in python."
                image="simple pokemon.gif"
                alt="pokemon game"
            />
            <Project
                title="FPS Game"
                description="Coded using the ursina module in python."
                image="fps game.gif"
                alt="fps game"
            />
            <Project
                title="Sniper Game"
                description="Developed with the pygame engine in python"
                image="sniper game.gif"
                alt="sniper game"
            />
            <Project
                title="Maze Game"
                description="Programmed with the pygame engine in python"
                image="maze game.gif"
                alt="maze game"
            />
            <h1>
                And more on my <a href="https://github.com/mtfehrer">github</a>
            </h1>
        </div>
    );
};

export default Projects;
