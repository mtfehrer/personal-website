import ExperienceChart from "../ExperienceChart/ExperienceChart";
import SkillsChart from "../SkillsChart/SkillsChart";
import Footer from "../Footer/Footer";
import DownArrow from "../DownArrow/DownArrow";
import "./AboutBody.css";

//add programming language experience chart
//add BU image

const AboutBody: React.FC = () => {
    return (
        <>
            <div className="about-body">
                <div className="about-intro fade-in">
                    <div className="about-intro-left-container">
                        <h1 className="about-title">About</h1>
                        <span className="about-intro-text">
                            From command-line scripts to software development, I have always been
                            driven by a passion for learning and expanding my programming skills.
                            Outside of coding, I find balance and inspiration through meditation,
                            exploring the outdoors, and immersing myself in books.
                        </span>
                    </div>
                    <img
                        className="BU-photo"
                        src={process.env.PUBLIC_URL + "/images/BU photo.jpg"}
                        alt="BU"
                    ></img>
                </div>

                <ExperienceChart
                    title="Programming Language Experience"
                    color="white"
                    rowLabels={["Python", "JavaScript", "HTML/CSS", "Java", "C++"]}
                    columnLabels={["Beginner", "Intermediate", "Advanced", "Expert"]}
                    barSizes={[6, 5, 5, 5, 4]}
                />
                <ExperienceChart
                    title="Web Framework Experience"
                    color="white"
                    rowLabels={["React.js", "Express.js", "Vue.js", "Flask"]}
                    columnLabels={["Beginner", "Intermediate", "Advanced", "Expert"]}
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
            <DownArrow />
            <Footer position="not fixed" />
        </>
    );
};

export default AboutBody;
