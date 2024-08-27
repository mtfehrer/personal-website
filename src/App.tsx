import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeBody from "./components/HomeBody/HomeBody";
import ExperienceBody from "./components/ExperienceBody/ExperienceBody";
import AboutBody from "./components/AboutBody/AboutBody";
import ContactBody from "./components/ContactBody/ContactBody";
import NotFound from "./components/NotFound/NotFound";

//delete unnecesary photos

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomeBody />} />
                <Route path="/experience" element={<ExperienceBody />} />
                <Route path="/about" element={<AboutBody />} />
                <Route path="/contact" element={<ContactBody />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
