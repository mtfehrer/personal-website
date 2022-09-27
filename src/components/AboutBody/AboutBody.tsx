import ExperienceChart from "../ExperienceChart/ExperienceChart";
import DownArrow from "../DownArrow/DownArrow";
import "./AboutBody.css";

//add programming language experience chart
//add BU image

const AboutBody: React.FC = () => {
    return (
        <div className="about-body">
            <div className="about-intro fade-in">
                <h1>
                    I started coding as a hobby, now I'm studying computer
                    science at Binghamton University
                </h1>
                <img className="BU-photo" src="BU photo.jpg" alt="BU"></img>
            </div>
            <DownArrow />
            <ExperienceChart />
        </div>
    );
};

export default AboutBody;
