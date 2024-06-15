import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const item = useLoaderData();
    console.log(item);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.photo.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;

        const updatedItems = { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status }
        console.log(updatedItems);

        fetch(`http://localhost:5000/newItems/${item._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Clay Pot || update_{item._id}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="md:p-24">
                <form onSubmit={handleSubmit} action="" className="p-10 bg-gray-200">
                    <h1 className="font-bold font-display text-3xl text-center text-green-950 mb-8">Update Existing Item Details</h1>
                    <div className="md:flex gap-10">
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Photo URL</span>
                                </label>
                                <input type="url" defaultValue={item.image} name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Item Name</span>
                                </label>
                                <input type="text" defaultValue={item.item_name} name="item_name" placeholder="Item Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Subcategory Name</span>
                                </label>
                                <input type="text" defaultValue={item.subcategory_name} name="subcategory_name" placeholder="Subcategory Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Short Description</span>
                                </label>
                                <input type="text" defaultValue={item.short_description} name="short_description" placeholder="Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Price ($)</span>
                                </label>
                                <input type="number" defaultValue={item.price} name="price" placeholder="Price" className="input input-bordered" required />
                            </div>

                        </div>
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Rating</span>
                                </label>
                                <input type="number" defaultValue={item.rating} name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" defaultValue={item.customization} name="customization" placeholder="Customization" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Processing Time</span>
                                </label>
                                <input type="datetime-local" defaultValue={item.processing_time} name="processing_time" placeholder="Processing Time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" defaultValue={item.stock_status} name="stock_status" placeholder="Stock Status" className="input input-bordered" required />
                            </div>
                            <button className="border-2 border-green-950 bg-green-800 rounded-lg px-4 py-3 text-black font-semibold mt-8 w-full">Update</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;