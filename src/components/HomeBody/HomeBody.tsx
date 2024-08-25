import "./HomeBody.css";
import Projects from "../Projects/Projects";
import DownArrow from "../DownArrow/DownArrow";
import Footer from "../Footer/Footer";

const HomeBody: React.FC = () => {
    return (
        <>
            <div className="home-body">
                <div className="intro-container fade-in">
                    <div>
                        <h1 className="intro-title">Hey, I'm Michael.</h1>
                        <span className="intro-text">
                            I’m a computer science student at Binghamton University with experience
                            in software engineering.
                        </span>
                    </div>
                    <img
                        className="profile-image"
                        src={process.env.PUBLIC_URL + "/images/profile-photo.jpg"}
                        alt="profile"
                    ></img>
                </div>
                <Projects />
            </div>
            <DownArrow />
            <Footer position="not fixed" />
        </>
    );
};

export default HomeBody;
