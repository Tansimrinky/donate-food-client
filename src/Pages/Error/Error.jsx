import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="items-center ml-56">
           <img className="flex justify-center  h=[500px] " src="https://i.ibb.co/PNvMRs7/fposter-small-wall-texture-product-750x1000.jpg" alt="" />
           <Link to='/'><button className="btn bg-green-500 text-white text-center font-bold items-center ml-80">Go to Home</button></Link>
        </div>
    );
};

export default Error;