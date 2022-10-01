import Chart from "../Chart/Chart";
import DownArrow from "../DownArrow/DownArrow";
import "./AboutBody.css";

//add programming language experience chart
//add BU image

const AboutBody: React.FC = () => {
    return (
        <div className="about-body">
            <div className="about-intro fade-in">
                <h1 className="about-title">About</h1>
                <div className="about-intro-inner-container">
                    <span className="about-intro-text">
                        I started coding as a hobby; now I'm studying computer
                        science at Binghamton University
                    </span>
                    <img className="BU-photo" src="BU photo.jpg" alt="BU"></img>
                </div>
            </div>
            <DownArrow />
            <Chart
                title="Programming Language Experience"
                color="red"
                rowLabels={["Python", "Javascript", "HTML/CSS", "Java", "C++"]}
                columnLabels={[
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                    "Expert",
                ]}
                barSizes={[6, 5, 5, 5, 4]}
            />
            <Chart
                title="Web Framework Experience"
                color="orangered"
                rowLabels={["React", "Express js", "Vue js", "Flask"]}
                columnLabels={[
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                    "Expert",
                ]}
                barSizes={[5, 5, 4, 4]}
            />
        </div>
    );
};

export default AboutBody;
