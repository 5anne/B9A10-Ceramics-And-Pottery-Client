import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const MyList = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || my_list</title>
            </Helmet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MyList;