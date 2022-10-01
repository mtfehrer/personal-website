import Footer from "../Footer/Footer";
import "./NotFound.css";

const NotFound: React.FC = () => {
    return (
        <>
            <div className="not-found-body">
                <h1 className="not-found-title">Page Not Found</h1>
            </div>
            <Footer position="fixed" />
        </>
    );
};

export default NotFound;
