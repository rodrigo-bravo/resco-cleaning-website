import FaqSection from './FaqSection/page';
import Footer from './Footer/page';
import Navbar from './Navbar/_components/navbar';

const faqs = () => {
    return (
        <div>
        <Navbar />
        <FaqSection />
        <Footer />
        </div>
    );
};

export default faqs;