import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

type Props = {
    position: string;
};

const Footer: React.FC<Props> = ({ position }: Props) => {
    return (
        <footer className={position === "fixed" ? "fixed" : ""}>
            <div className="icon-container">
                <a href="https://github.com/mtfehrer">
                    <FaGithub style={{ color: "white" }} />
                </a>
                <a href="https://linkedin.com/in/michael-fehrer-b13b47250">
                    <FaLinkedin style={{ color: "white" }} />
                </a>
            </div>
            <span className="bottom-info">
                <span className="bottom-info-text">Built with React</span>
                <span className="bottom-info-text">Michael Fehrer 2022</span>
            </span>
        </footer>
    );
};

export default Footer;
