import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/all_items">All Items</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/add_item">Add Item</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/my_list">My List</NavLink>
    </>
    return (
        <div className="bg-[#382511] py-6">
            <div className="flex justify-around items-center pb-3">
                <h1 className="font-display text-4xl font-bold text-white">Clay Pot</h1>
                <div className="hidden md:flex items-center gap-6 text-lg text-gray-300">
                    {links}
                </div>
                <div className="flex gap-4">
                    <Link to="/login"><button className="text-white border-2 px-4 py-2">Log In</button></Link>
                    <Link to="/register"><button className="text-white border-2 px-4 py-2">Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;