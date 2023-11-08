import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";
import Footer from "../Componenets/Navbar/Footer";


const Root = () => {
    return (
        <div className=" mx-auto max-w-[1500px]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;