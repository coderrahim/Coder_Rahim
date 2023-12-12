import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Pages/Home/Footer";


const MainLayout = () => {
    return (
        <div className="bg-slate-100">
            <div className="shadow-md">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;