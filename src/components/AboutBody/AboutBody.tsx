import ExperienceChart from "../ExperienceChart/ExperienceChart";
import SkillsChart from "../SkillsChart/SkillsChart";
import DownArrow from "../DownArrow/DownArrow";
import "./AboutBody.css";

//add programming language experience chart
//add BU image

const AboutBody: React.FC = () => {
    return (
        <div className="about-body">
            <div className="about-intro fade-in">
                <div className="about-intro-left-container">
                    <h1 className="about-title">About</h1>
                    <span className="about-intro-text">
                        As a kid, I started out with simple command line
                        programs. Over time, I created games with greater
                        complexity. Now, I'm working on larger projects and
                        systems. I'm always eager to learn, especially when
                        cooperating with others. I'm studying computer science
                        at{" "}
                        <span style={{ color: "rgb(0, 90, 67)" }}>
                            Binghamton University
                        </span>
                        .
                    </span>
                </div>
                <img className="BU-photo" src="BU photo2.jpg" alt="BU"></img>
            </div>
            <DownArrow />
            <ExperienceChart
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
            <ExperienceChart
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
            <SkillsChart
                skills={[
                    "Git/GitHub",
                    "SQL",
                    "Node.js",
                    "Linux",
                    "REST APIs",
                    "MongoDB",
                    "Docker",
                    "JWT",
                    "Typing",
                    "OOP",
                    "Game Design",
                    "Databases",
                    "Testing",
                    "Problem Solving",
                    "Algorithms",
                ]}
            />
        </div>
    );
};

export default AboutBody;
