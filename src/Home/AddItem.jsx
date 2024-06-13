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
            <div className="p-24">
                <form action="" className="p-10 bg-gray-200">
                    <h1 className="font-bold font-display text-3xl text-center text-green-950 mb-8">Add New Item</h1>
                    <div className="flex gap-10">
                        <div className="w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Photo URL</span>
                                </label>
                                <input type="file" name="photo" placeholder="Photo" className="input input-bordered pt-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Item Name</span>
                                </label>
                                <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Subcategory Name</span>
                                </label>
                                <input type="text" name="subcategory_name" placeholder="Subcategory Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Short Description</span>
                                </label>
                                <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="Customization" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Processing Time</span>
                                </label>
                                <input type="time" name="processing_time" placeholder="Processing Time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" name="stock_status" placeholder="Stock Status" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <button className="border-2 border-[#836953] bg-[#deb887] rounded-lg px-4 py-3 text-black font-semibold mt-8 w-full">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItem;