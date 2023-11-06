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
    <nav className="md:flex justify-between sticky  p-6 bg-white bg-rounded mb-5">
       <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ml-5 ">
       <div className="mb-2" ><NavLink  to="/">Home</NavLink></div>
        <div className="mb-2"><NavLink to="/login">Login</NavLink></div>
        <div className="mb-2" ><NavLink to="/register">Register</NavLink></div>
        <div className="mb-2"><NavLink to="/availablefoods">Available Foods</NavLink></div>
        {user && (
          <>
              <div className="mb-2"><NavLink to="/addfoods">Add Foods </NavLink></div>
              <div className="mb-2"><NavLink to="/managemyfoods">
                {" "}
                <div className="flex items-center gap-1">
                  <div>Manage My Foods</div>{" "}
                </div>{" "}
              </NavLink></div>
              <div className="mb-2"><NavLink to="/foodrequest">My Food Request</NavLink></div>
          </>
        )}
      </ul>
    </div>
      <div className="flex">
        <img className="w-[100px] h-[50px] rounded" src="https://i.ibb.co/1q2c67y/Food-Logo-Graphics-5365253-1-580x386.jpg" alt="" />
        <h2 className="text-5xl font-bold text-center text-">
          Food<span className="text-green-500">First</span>
        </h2>
      </div>
      <div className=" ">
      <div className=" hidden md:hidden lg:grid  mt-4 lg:grid-cols-7 flex-center font-bold text-slate-500 gap-2 items-center">
       <div className=""> <NavLink  to="/">Home</NavLink></div>
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
          <button onClick={handleLogOut} className="btn bg-green-500 text-white">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-green-500 text-white">Log in</button>
          </Link>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
