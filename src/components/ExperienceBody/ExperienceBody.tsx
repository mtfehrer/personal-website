import Footer from "../Footer/Footer";
import DownArrow from "../DownArrow/DownArrow";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import "./ExperienceBody.css";

const ExperienceBody: React.FC = () => {
    return (
        <>
            <div className="experience-body fade-in">
                <h1>Experience</h1>
                <ExperienceSection
                    organization="Broadridge"
                    image="/images/broadridge logo.png"
                    subsections={[
                        {
                            image: "/images/broadridge portrait.jpg",
                            description: "here is my portrait",
                        },
                        { image: "/images/intern photo.jpg", description: "intern photo" },
                    ]}
                />
                <ExperienceSection
                    organization="Red Hat"
                    image="/images/red hat logo.png"
                    subsections={[
                        {
                            image: "/images/red hat bag.png",
                            description: "here is my red hat bag",
                        },
                        {
                            image: "/images/red hat form.png",
                            description: "here is the form i made",
                        },
                    ]}
                />
                <ExperienceSection
                    organization="Binghamton ACM Chapter"
                    image="/images/acm logo.png"
                    subsections={[
                        {
                            image: "",
                            description: "",
                        },
                        { image: "", description: "" },
                    ]}
                />
                <ExperienceSection
                    organization="Binghamton Tech Collective"
                    image="/images/btc logo.png"
                    subsections={[
                        {
                            image: "",
                            description: "",
                        },
                        { image: "", description: "" },
                    ]}
                />
            </div>
            <DownArrow />
            <Footer position="not fixed" />
        </>
    );
};

export default ExperienceBody;
