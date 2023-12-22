import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { MdAddTask, MdTaskAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <>
            <div><Navbar></Navbar></div>
            <div className="flex border-t-8 border-[#d09f35] rounded-lg">
                <hr />
                {/* resume side bar */}
                <div className="w-64 min-h-screen bg-[#d09f35] text-black text-lg font-semibold">
                    <div>
                        {
                            user ? <>
                                <div className="flex items-center gap-3">
                                    <img src={user?.photoURL} alt="" className="rounded-full h-10 w-10" />
                                    <span>{user?.displayName}</span>
                                </div>
                            </> : null
                        }
                    </div>
                    <ul className="menu p-6">
                        <li>
                            <NavLink to="/dashboard/add_task">
                                <MdAddTask />
                                Add Task</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/all_task">
                                <MdTaskAlt />
                                All Task</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/to_do">
                                <FaTasks />
                                To Do</NavLink>
                        </li>
                    </ul>
                    <div className="flex gap-3">
                        <button className="btn btn-outline"><Link to='/'>Home</Link></button>
                        <button className="btn btn-outline"><Link onClick={handleLogOut}>Logout</Link></button>
                    </div>
                </div>
                {/* resume content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="mt-1">
                <hr />
            </div>
            <div><Footer></Footer></div>
        </>
    );
};

export default Dashboard;