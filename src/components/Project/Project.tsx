import "./Project.css";

type Props = {
    title: string;
    description: string;
    image: string;
};

const Project: React.FC<Props> = ({ title, description, image }: Props) => {
    return (
        <div className="project-container">
            <h1>{title}</h1>
            <img
                className="project-image"
                src={image}
                alt="tower defense game"
            ></img>
            <span>{description}</span>
        </div>
    );
};

export default Project;
