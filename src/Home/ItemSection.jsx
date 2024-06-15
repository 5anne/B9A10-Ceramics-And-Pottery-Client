import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemSection = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="mx-8 md:mx-12 my-8">
            <div className="flex justify-between items-center">
                <h1 className="font-display font-bold text-4xl">Our Latest Items</h1>
                <button className="bg-emerald-900 px-4 py-3 text-white font-semibold">Shop Now</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    items.map((item) => <div key={item._id} className="border-2 rounded-lg border-emerald-900 p-8 hover:border-none flex justify-center">
                        <div className="">
                            <img className="w-[300px] h-[300px]" src={item.image} alt="" />
                            <h2 className="text-center font-display font-bold text-2xl my-2">{item.item_name}</h2>
                            <p className="text-center font-semibold text-emerald-900 underline">Price: ${item.price}</p>
                            <Link to={`/view_details/${item._id}`} className="flex justify-center my-2"><button className="text-white font-display bg-emerald-900 px-4 py-2">View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ItemSection;