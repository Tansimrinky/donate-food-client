import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;