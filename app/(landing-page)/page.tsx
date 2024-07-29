import React from 'react';
import FirstSection from './FirstSection/page';
import Navbar from "./Navbar/_components/navbar";
import RotatingSection from "./RotatingSection/page";
import Footer from "./Footer/page";
import 'dotenv/config';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <Navbar />
            <FirstSection />
            <RotatingSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
