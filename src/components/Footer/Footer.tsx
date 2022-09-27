import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="icon-container">
                <FaGithub />
                <FaLinkedin />
            </div>
            <span className="bottom-info">Michael Fehrer 2022</span>
        </footer>
    );
};

export default Footer;
