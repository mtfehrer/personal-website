import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <header>
            <span className="header-title gradient-text">Michael Fehrer</span>
            <div className="header-side-content">
                <Link to="/">
                    <span className="side-content-text">Home</span>
                </Link>
                <Link to="/about">
                    <span className="side-content-text">About</span>
                </Link>
                <a
                    href={process.env.PUBLIC_URL + "/resume.pdf"}
                    download={"resume.pdf"}
                >
                    <span className="side-content-text">Resume</span>
                </a>
                <Link to="/contact">
                    <span className="side-content-text">Contact</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
