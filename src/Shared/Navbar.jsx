import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/contact">Contact</NavLink>
    </>
    return (
        <div className="bg-[#382511] py-6">
            <div className="flex justify-around items-center pb-3">
                <h1 className="font-display text-4xl font-bold text-white">Clay Pot</h1>
                <div className="hidden md:flex items-center gap-6 text-lg text-gray-300">
                    {links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;