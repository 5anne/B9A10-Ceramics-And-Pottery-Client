import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Footer from "../Shared/Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;