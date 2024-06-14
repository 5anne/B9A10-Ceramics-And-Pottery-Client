import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Delete = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || delete</title>
            </Helmet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Delete;