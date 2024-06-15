import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";



const AddItem = () => {

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
        const email = form.email.value;
        const name = form.name.value;

        const newItems = { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, email, name }
        console.log(newItems);

        fetch('http://localhost:5000/newItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Item Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>Clay Pot || add_item</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="md:p-24">
                <form onSubmit={handleSubmit} action="" className="p-10 bg-gray-200">
                    <h1 className="font-bold font-display text-3xl text-center text-green-950 mb-8">Add New Item</h1>
                    <div className="md:flex gap-10">
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="https://postimg.cc/..." className="input input-bordered" required />
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
                                    <span className="label-text font-display">Price ($)</span>
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
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="example- yes/no" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Processing Time</span>
                                </label>
                                <input type="datetime-local" name="processing_time" placeholder="Processing Time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" name="stock_status" placeholder="example- In stock, Made to Order" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">User Email</span>
                                </label>
                                <input type="email" name="email" placeholder="User Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
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