import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="icon-container">
                <Link to="/">
                    <FaGithub style={{ color: "white" }} />
                </Link>
                <Link to="/">
                    <FaLinkedin style={{ color: "white" }} />
                </Link>
            </div>
            <span className="bottom-info">
                <span className="bottom-info-text">Built with React</span>
                <span className="bottom-info-text">Michael Fehrer 2022</span>
            </span>
        </footer>
    );
};

export default Footer;
