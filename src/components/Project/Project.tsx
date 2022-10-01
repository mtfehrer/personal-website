import { FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

type Props = {
    title: string;
    description: string;
    link: string;
    image: string;
    alt: string;
};

const Project: React.FC<Props> = ({
    title,
    description,
    link,
    image,
    alt,
}: Props) => {
    return (
        <div className="project-container">
            <div className="project-title-container">
                <h1 className="title">{title}</h1>
                <a className="external-link" href={link}>
                    <FaExternalLinkAlt />
                </a>
            </div>
            <img className="project-image" src={image} alt={alt}></img>
            <span className="description">{description}</span>
        </div>
    );
};

export default Project;
