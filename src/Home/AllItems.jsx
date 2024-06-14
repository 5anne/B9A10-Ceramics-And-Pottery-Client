import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllItems = () => {
    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newItems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Clay Pot || all_items</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-black p-16">
                <div className="overflow-x-auto bg-white p-8">
                    <h1 className="font-bold text-center text-3xl font-display border-b-2 py-8 w-52 mx-auto border-b-orange-900 mb-6">All Items</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox hidden" />
                                    </label>
                                </th>
                                <th>User Info</th>
                                <th>Items</th>
                                <th>Subcategory</th>
                                <th>Price</th>
                                <th>Short Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allItems.map(allItem => <tr key={allItem._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div>
                                            <div className="font-bold">{allItem.name}</div>
                                            <div className="text-sm opacity-50">{allItem.email}</div>
                                        </div>
                                    </td>
                                    <td>{allItem.item_name}</td>
                                    <td>{allItem.subcategory_name}</td>
                                    <td>${allItem.price}</td>
                                    <td>{allItem.short_description}</td>
                                    <th>
                                        <Link to={`/show_details/${allItem._id}`}><button className="bg-orange-950 px-4 py-3 text-white font-semibold hover:bg-orange-300">View Details</button></Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllItems;