import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="home-body">
                <div className="intro-container">
                    <div>
                        <h1>Hey, I'm Michael.</h1>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum purus eros, porttitor eget aliquam
                            id, gravida vel nunc.
                        </span>
                    </div>
                    <img
                        className="profile-image"
                        src="profile-photo.jpg"
                        alt="profile"
                    ></img>
                </div>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
            <Footer />
        </div>
    );
};

export default App;
