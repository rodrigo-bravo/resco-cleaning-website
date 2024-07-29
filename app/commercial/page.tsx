import Footer from "./Footer/page";
import MainSection from "./MainSection/page";
import Navbar from "./Navbar/_components/navbar";
import WhySection from "./WhySection/page";

const  commercial = () => {
    return (
        <div>
            <Navbar />
            <MainSection />
            <WhySection />
            <Footer />
        </div>
    );
};

export default commercial;