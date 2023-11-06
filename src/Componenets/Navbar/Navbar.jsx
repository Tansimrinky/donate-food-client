import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);






  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <nav className="lg:flex lg:justify-between sticky justify-center p-6 bg-white bg-rounded mb-5">
      <div className="flex">
        <img className="w-[100px] h-[50px] rounded" src="https://i.ibb.co/1q2c67y/Food-Logo-Graphics-5365253-1-580x386.jpg" alt="" />
        <h2 className="text-5xl font-bold text-center text-">
          Food<span className="text-green-500">First</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 mt-4 md:grid-cols-5 flex-center font-bold text-slate-500 gap-6 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/availablefoods">Available Foods</NavLink>
        {user && (
          <>
            <li className="list-none">
              <NavLink to="/addfoods">Add Foods </NavLink>
            </li>
            <li className="list-none flex">
              <NavLink to="/managemyfoods">
                {" "}
                <div className="flex items-center gap-1">
                  <div>Manage My Foods</div>{" "}
                </div>{" "}
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink to="/foodrequest">My Food Request</NavLink>
            </li>
          </>
        )}
      </div>

      <div className="flex mt-4 gap-6 items-center">
        {user ? (
          <>
            {" "}
            <img
              className="h-[50px] w-[50px] rounded-full"
              src={user.photoURL}
              alt=""
            />{" "}
          </>
        ) : (
          <FaUserCircle className="h-[50px] w-[50px]"></FaUserCircle>
        )}
        {user ? (
          <div className="text-slate-700 text-center font-semibold">
            {user.displayName}
          </div>
        ) : (
          <></>
        )}

        {user ? (
          <button onClick={handleLogOut} className="btn bg-blue-700 text-white">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-blue-700 text-white">Log in</button>
          </Link>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
