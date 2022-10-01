import "./HomeBody.css";
import Projects from "../Projects/Projects";
import DownArrow from "../DownArrow/DownArrow";

const HomeBody: React.FC = () => {
    return (
        <div className="home-body">
            <div className="intro-container fade-in">
                <div>
                    <h1 className="intro-title">Hey, I'm Michael.</h1>
                    <span className="intro-text">
                        I'm an avid coder. I've been programming and developing
                        software for years. I'm primarily focused with building
                        websites and backend systems.
                    </span>
                </div>
                <img
                    className="profile-image"
                    src="profile-photo.jpg"
                    alt="profile"
                ></img>
            </div>
            <Projects />
            <DownArrow />
        </div>
    );
};

export default HomeBody;
