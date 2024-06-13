import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { users, logOut } = useContext(AuthContext);
    console.log(users);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const links = <>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/all_items">All Items</NavLink>
        {
            users &&
            <>
                <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/add_item">Add Item</NavLink>
                <NavLink className={({ isActive }) => (isActive && 'text-blue-600 hover:underline')} to="/my_list">My List</NavLink>
            </>
        }
    </>
    return (
        <div className="bg-[#382511] py-6">
            <div className="flex justify-around items-center pb-3">
                <h1 className="font-display text-4xl font-bold text-white">Clay Pot</h1>
                <div className="hidden md:flex items-center gap-6 text-lg text-gray-300">
                    {links}
                </div>
                {
                    users ?
                        <div className="flex gap-4 items-center">
                            <div className="tooltip tooltip-bottom" data-tip={users.displayName}>
                                <img className="w-10 h-10 rounded-full border-2 border-lime-900" src={users.photoURL} alt="" />
                            </div>
                            <Link to="/login"><button onClick={handleLogOut} className="text-white border-2 px-4 py-2">Log Out</button></Link>
                        </div> :
                        <div className="flex gap-4">
                            <Link to="/login"><button className="text-white border-2 px-4 py-2">Log In</button></Link>
                            <Link to="/register"><button className="text-white border-2 px-4 py-2">Register</button></Link>
                        </div>
                }
            </div>
            <div className="flex justify-center items-center gap-6 text-lg text-gray-400 md:hidden">
                {links}
            </div>
        </div>
    );
};

export default Navbar;