import "./SkillsChart.css";

type Props = {
    skills: string[];
};

const SkillsChart: React.FC<Props> = ({ skills }: Props) => {
    return (
        <div className="container">
            <h1 className="title">Other Skills</h1>
            <div className="skills-grid">
                {skills.map((s) => {
                    return <div className="skills-block">{s}</div>;
                })}
            </div>
        </div>
    );
};

export default SkillsChart;
