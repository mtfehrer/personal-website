import Footer from "../Footer/Footer";
import "./ContactBody.css";

const ContactBody: React.FC = () => {
    return (
        <>
            <div className="contact-body fade-in">
                <div className="inner-contact-container">
                    <h1>Contact</h1>
                    <div>Email: mtfehrer@gmail.com</div>
                    <div>
                        GitHub:{" "}
                        <a
                            className="contact-link"
                            href="https://github.com/mtfehrer"
                        >
                            github.com/mtfehrer
                        </a>
                    </div>
                    <div>
                        LinkedIn:{" "}
                        <a
                            className="contact-link"
                            href="https://linkedin.com/in/michael-fehrer-b13b47250"
                        >
                            linkedin.com/in/michael-fehrer-b13b47250
                        </a>
                    </div>
                </div>
            </div>
            <Footer position="fixed" />
        </>
    );
};

export default ContactBody;
