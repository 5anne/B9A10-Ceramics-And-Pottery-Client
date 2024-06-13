import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const AddItem = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || add_item</title>
            </Helmet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default AddItem;