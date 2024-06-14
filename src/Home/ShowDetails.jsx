import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const ShowDetails = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <Helmet>
                <title>Clay Pot || Show_Details_{item.item_name}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-gray-100 p-8 flex justify-center">
                <div className="flex flex-row-reverse gap-4 my-10 mx-10 bg-white shadow-lg w-1/2">
                    <div className="p-4 space-y-1 w-1/2">
                        <h1 className="font-bold font-display text-2xl text-cyan-950">{item.item_name}</h1>
                        <p><span className="font-semibold">Category Name: </span>{item.subcategory_name}</p>
                        <p><span className="font-semibold">Short Description: </span>{item.short_description}</p>
                        <p><span className="font-semibold">Customization: </span>{item.customization}</p>
                        <p><span className="font-semibold">Processing Time: </span>{item.processing_time} PM</p>
                        <p><span className="font-semibold">Price: </span>${item.price}</p>
                        <p><span className="font-semibold">Stock Status: </span>{item.stock_status}</p>
                        <p><span className="font-semibold">Rating:</span> {item.rating}</p>
                    </div>
                    <img className="w-1/2 h-[300px] p-2" src={item.image} alt="Image should be .png file" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowDetails;