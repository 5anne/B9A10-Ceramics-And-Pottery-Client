import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const ViewDetails = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <Helmet>
                <title>Clay Pot || View_Details_{item.item_name}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-gray-100 p-8 flex justify-center">
                <div className="flex gap-4 my-10 mx-10 bg-white shadow-lg w-1/2">
                    <div className="p-4 space-y-1">
                        <h1 className="font-bold font-display text-2xl text-cyan-950">{item.item_name}</h1>
                        <p className="font-bold font-display text-xl text-cyan-900">Description: <span className="text-lg font-light">{item.description}</span></p>
                        <div className="flex justify-between items-center font-semibold">
                            <p>Price: ${item.price}</p>
                            <p>Discount: {item.discount}%</p>
                        </div>
                        <p className="text-center mt-8 font-semibold">{item.rating}</p>
                        <div className="rating flex justify-center">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                    <img className="w-1/2 h-[300px]" src={item.image} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;