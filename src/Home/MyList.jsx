import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {

    const { users, loading } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newItems')
            .then(res => res.json())
            .then(data => {
                if (!loading) {
                    const listedItem = data?.filter(item => item.email === users.email)
                    setItems(listedItem);
                    setDisplayItems(listedItem);
                }

            })
    }, [])
    console.log(items);
    console.log(users);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/newItems/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = items?.filter(item => item._id !== id);
                            setItems(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleFilter = filter => {
        if (filter === "ALL") {
            setDisplayItems(items);
        }
        else if (filter === 'YES') {
            const filteredItems = items.filter((item) => {
                const value = item.customization;
                return value.toUpperCase() === filter;
            });
            setDisplayItems(filteredItems);
        }
        else if (filter === 'NO') {
            const filteredItems = items.filter((item) => {
                const value = item.customization;
                return value.toUpperCase() === filter;
            })
            setDisplayItems(filteredItems);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Clay Pot || my_list</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-black py-16 px-28">
                <div className="flex justify-center items-center gap-2 mb-10 border-2 border-white w-28 mx-auto">
                    <h1 className="font-bold font-display text-2xl text-gray-200 ">Filter</h1>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="text-white text-2xl"><IoIosArrowDropdown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu text-white w-36 bg-slate-600">
                            <li><a onClick={() => handleFilter('ALL')} className="border-b-2 rounded-none hover:text-gray-950">Custom: All</a></li>
                            <li><a onClick={() => handleFilter('YES')} className="border-b-2 rounded-none hover:text-gray-950">Custom: Yes</a></li>
                            <li><a onClick={() => handleFilter('NO')} className="border-b-2 rounded-none hover:text-gray-950">Custom: No</a></li>
                        </ul>
                    </div>
                </div>
                {
                    displayItems.map(item => <div key={item._id} className="bg-transparent border-2 border-white rounded-lg p-10 grid grid-cols-3 gap-8 mb-10">
                        <img className="h-[200px]" src={item.image} alt="" />
                        <div className="space-y-1 text-gray-400">
                            <h1 className="font-bold font-display text-2xl text-cyan-950">{item.item_name}</h1>
                            <p><span className="font-semibold">Category Name: </span>{item.subcategory_name}</p>
                            <p><span className="font-semibold">Short Description: </span>{item.short_description}</p>
                            <p><span className="font-semibold ">Customization: </span>{item.customization}</p>
                            <p><span className="font-semibold">Processing Time: </span>{item.processing_time} PM</p>
                            <p><span className="font-semibold">Price: </span>${item.price}</p>
                            <p><span className="font-semibold">Stock Status: </span>{item.stock_status}</p>
                            <p><span className="font-semibold">Rating:</span> {item.rating}</p>
                        </div>
                        <div className="flex gap-8">
                            <Link to={`/update/${item._id}`}><button className="bg-green-950 hover:bg-green-300 px-4 py-3 text-white font-semibold h-12">Update</button></Link>
                            <button onClick={() => handleDelete(item._id)} className="bg-red-900 hover:bg-red-300 px-4 py-3 text-white font-semibold h-12">Delete</button>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;