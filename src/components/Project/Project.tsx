import "./Project.css";

type Props = {
    title: string;
    description: string;
    image: string;
    alt: string;
};

const Project: React.FC<Props> = ({
    title,
    description,
    image,
    alt,
}: Props) => {
    const animationElements = document.querySelectorAll("project-container");
    console.log(animationElements);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
    });

    animationElements.forEach((e) => {
        observer.observe(e);
    });
    return (
        <div className="project-container">
            <h1 className="title">{title}</h1>
            <img className="project-image" src={image} alt={alt}></img>
            <span className="description">{description}</span>
        </div>
    );
};

export default Project;
