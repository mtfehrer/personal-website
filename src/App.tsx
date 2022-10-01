import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeBody from "./components/HomeBody/HomeBody";
import AboutBody from "./components/AboutBody/AboutBody";
import ContactBody from "./components/ContactBody/ContactBody";
import NotFound from "./components/NotFound/NotFound";

//rename project to "michael-fehrer"
//delete unnecesary photos
//deploy to github pages

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomeBody />} />
                <Route path="/about" element={<AboutBody />} />
                <Route path="/contact" element={<ContactBody />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
