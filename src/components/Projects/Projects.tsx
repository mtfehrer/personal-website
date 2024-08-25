import "./Projects.css";
import Project from "../Project/Project";

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <Project
                title="Tower Defense Game"
                description="Built with React and TypeScript."
                link="https://github.com/mtfehrer/tower-defense-game-react"
                image={process.env.PUBLIC_URL + "/images/tower defense.gif"}
                alt="tower defense game"
            />
            <Project
                title="2D Arcade Game"
                description="Developed with the Pygame engine in Python."
                link="https://github.com/mtfehrer/the-shooter"
                image={process.env.PUBLIC_URL + "/images/shooter game.gif"}
                alt="2D Arcade Game"
            />
            <Project
                title="Forum Website"
                description="Built with the MERN stack."
                link="https://github.com/mtfehrer/forum-react"
                image={process.env.PUBLIC_URL + "/images/forum site.png"}
                alt="forum website"
            />
            <Project
                title="Pokemon Battle"
                description="Created using the Curses module in Python."
                link="https://github.com/mtfehrer/pokemon-battle"
                image={process.env.PUBLIC_URL + "/images/simple pokemon.gif"}
                alt="pokemon game"
            />
            <Project
                title="FPS Game"
                description="Coded using the Ursina module in Python."
                link="https://github.com/mtfehrer/fps-game"
                image={process.env.PUBLIC_URL + "/images/fps game.gif"}
                alt="fps game"
            />
            <Project
                title="Sniper Game"
                description="Developed with the Pygame engine in Python."
                link="https://github.com/mtfehrer/the-sniper"
                image={process.env.PUBLIC_URL + "/images/sniper game.gif"}
                alt="sniper game"
            />
            <Project
                title="Maze Game"
                description="Programmed with the Pygame engine in Python."
                link="https://github.com/mtfehrer/the-maze"
                image={process.env.PUBLIC_URL + "/images/maze game.gif"}
                alt="maze game"
            />
            <div className="bottom-container">
                <h1>
                    And more on my{" "}
                    <a href="https://github.com/mtfehrer" style={{ color: "white" }}>
                        <span className="external-link">github</span>
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default Projects;
