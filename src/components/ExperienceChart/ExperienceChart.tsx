import "./ExperienceChart.css";

const ExperienceChart: React.FC = () => {
    return (
        <div className="container">
            <h1>Programming Language Experience</h1>
            <div className="experience-grid">
                <div className="block"></div>
                <div className="block">
                    <div className="column-header header-block">Beginner</div>
                </div>
                <div className="block">
                    <div className="column-header header-block">
                        Intermediate
                    </div>
                </div>
                <div className="block">
                    <div className="column-header header-block">Advanced</div>
                </div>
                <div className="block">
                    <div className="column-header header-block">Expert</div>
                </div>

                <div className="block">
                    <div className="row-header header-block">Python</div>
                </div>

                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="row-header header-block">Javascript</div>
                </div>

                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block"></div>
                <div className="block">
                    <div className="row-header header-block">HTML/CSS</div>
                </div>

                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block"></div>
                <div className="block">
                    <div className="row-header header-block">Java</div>
                </div>

                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block"></div>
                <div className="block">
                    <div className="row-header header-block">C++</div>
                </div>

                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block">
                    <div className="bar"></div>
                </div>
                <div className="block"></div>
                <div className="block"></div>
            </div>
        </div>
    );
};

export default ExperienceChart;
