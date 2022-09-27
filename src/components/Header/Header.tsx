import "./Header.css";

const Header: React.FC = () => {
    return (
        <header>
            <span className="header-title">Michael Fehrer</span>
            <div className="header-side-content">
                <span>Home</span>
                <span>About</span>
                <span>Resume</span>
                <span>Contact</span>
            </div>
        </header>
    );
};

export default Header;
