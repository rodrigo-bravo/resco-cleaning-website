import AboutSection from "./AboutSection/page";
import Footer from "./Footer/page";
import Navbar from "./Navbar/_components/navbar";

const about = () => {
    return (
        <div>
            <Navbar />
            <AboutSection />
            <Footer />
        </div>
    );
};

export default about;