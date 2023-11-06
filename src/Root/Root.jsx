import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";
import Footer from "../Componenets/Navbar/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;