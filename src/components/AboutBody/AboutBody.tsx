import ProgrammingChart from "../ProgrammingChart/ProgrammingChart";
import WebFrameworkChart from "../WebFrameworkChart/WebFrameworkChart";
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
            <ProgrammingChart />
            <WebFrameworkChart />
            <Chart
                title="test"
                color="red"
                rowLabels={["row1", "row2", "row3"]}
                columnLabels={["col1", "col2", "col3", "col4"]}
                barSizes={[1, 3, 4]}
            />
        </div>
    );
};

export default AboutBody;
