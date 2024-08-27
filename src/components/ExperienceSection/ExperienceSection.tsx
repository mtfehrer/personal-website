import "./ExperienceSection.css";

type Props = {
    organization: string;
    image: string;
    subsections: { image: string; description: string }[];
};

type SubsectionProps = {
    image: string;
    description: string;
};

const Subsection = ({ image, description }: SubsectionProps) => {
    return (
        <div className="experience-subsection">
            <span>{description}</span>
            <img className="experience-page-img" src={process.env.PUBLIC_URL + image}></img>
        </div>
    );
};

const ExperienceSection: React.FC<Props> = ({ organization, image, subsections }: Props) => {
    return (
        <div className="experience-section-container">
            <div className="experience-section-title-container">
                <img
                    className="experience-page-org-logo"
                    src={process.env.PUBLIC_URL + image}
                ></img>
                <h2 className="title">{organization}</h2>
            </div>
            {subsections.map((subsection) => (
                <Subsection image={subsection.image} description={subsection.description} />
            ))}
        </div>
    );
};

export default ExperienceSection;
