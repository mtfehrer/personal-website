import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeBody from "./components/HomeBody/HomeBody";
import AboutBody from "./components/AboutBody/AboutBody";
import ContactBody from "./components/ContactBody/ContactBody";

//ideas
//instabase
//halo lab

//rename project to "michael-fehrer"
//me at mountain photo
//deploy to github pages

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomeBody />} />
                <Route path="/about" element={<AboutBody />} />
                <Route path="/resume" element={<h1>TEST</h1>} />
                <Route path="/contact" element={<ContactBody />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
