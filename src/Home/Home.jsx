import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import ItemSection from "./ItemSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <ItemSection></ItemSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;