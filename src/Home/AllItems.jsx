import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const AllItems = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || all_items</title>
            </Helmet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default AllItems;