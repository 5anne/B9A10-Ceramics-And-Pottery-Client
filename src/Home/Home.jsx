import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import ItemSection from "./ItemSection";
import FAQ from "./FAQ";
import Discount from "./Discount";
import CategorySection from "./CategorySection";
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";
import { useState } from "react";

const Home = () => {
    const [theme, setTheme] = useState(false);
    return (
        <div className={theme && "bg-black"}>
            <Helmet>
                <title>Clay Pot || Home</title>
            </Helmet>
            <div className="relative"><Navbar></Navbar></div>
            {
                theme ?
                    <div onClick={() => setTheme(false)} className="absolute top-10 text-white right-10"><BsToggle2Off /></div> :
                    <div onClick={() => setTheme(true)} className="absolute top-10 text-white right-10"><BsToggle2On /></div>
            }
            <Banner></Banner>
            <ItemSection></ItemSection>
            <CategorySection></CategorySection>
            <Discount></Discount>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;