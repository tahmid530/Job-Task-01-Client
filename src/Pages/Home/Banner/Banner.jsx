import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Banner = () => {
    const { user } = useContext(AuthContext);

    const navItems = <>
        {user?<>
            <li className="btn btn-wide mt-12 lg:ml-96"><Link to='/dashboard'>Let’s Explore</Link></li>
        </>
            : <li className="btn btn-wide mt-12 lg:ml-96"><Link to="/login">Let’s Explore</Link></li>
        }
    </>

    return (
        <>
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XZv8PDZ/1.jpg" className="w-full" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-white space-y-8 lg:mt-80">
                            <h3 className=" text-6xl font-bold">Unlock Your Dream Career.</h3>
                            <h3 className=" text-6xl font-bold lg:pl-48">Find Your Perfect Job Today!</h3>
                            {navItems}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;