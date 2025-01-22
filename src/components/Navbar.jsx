import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { actionResponse, profileResponse } from "../redux/responsiveSlice";
import { useEffect, useState } from "react";
import Logout from "./Logout";
const Navbar = () => {
    const isProfileVisible = useSelector(state => state.responsive.isProfileVisible)
    const isActionVisible = useSelector(state => state.responsive.isActionVisible)

    const dispatch = useDispatch()
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleProfile = () => {
        dispatch(profileResponse(!isProfileVisible))
    }
    const handleAction = () => {
        dispatch(actionResponse(!isActionVisible))
    }
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('theme', newTheme);
        console.log("clik")
    }
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
            if (!isAuthenticated) {
            return <div>Please log in to view the To-Do list.</div>;
             }




    return (
        <nav className="dark:bg-[#1F1F1F]  dark:text-white  ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch">
                        <div className="flex space-x-4">
                            <CiMenuBurger className="mt-2 text-2xl font-bold cursor-pointer" onClick={handleProfile} />
                            <h1 className="text-[#3F9142]  text-3xl font-bold ">

                                DoIt

                            </h1>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto">
                            <div className="flex space-x-4">
                                <p className="  px-3 py-2 rounded-md cursor-pointer"><PiMagnifyingGlassLight style={{ fontSize: '24px' }} /></p>
                                <p className=" px-3 py-2 rounded-md text-sm text font-medium cursor-pointer"><CgMenuGridO style={{ fontSize: '24px' }} onClick={handleAction} /></p>
                                      <Logout />

                                <p className="  px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={handleDarkMode}><BsMoonStars style={{ fontSize: '24px' }} /></p>

                            </div>
                        </div>
                    </div>
                </div >
            </div >



        </nav >
    );
}

export default Navbar;


