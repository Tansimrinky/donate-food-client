import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";



const Login = () => {

    const { signIn , googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleLogIn = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      signIn(email, password)
        .then((result) => {
          Swal.fire("Successfully Logged in ..");
          navigate(location?.state ? location.state : "/");
          return result.user;
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
          });
        });
    };
  
    const handleGoogle = () => {
      googleSignIn()
        .then((result) => {
          Swal.fire("Successfullly logged in..");
          console.log(result.user);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
          });
        });
    };
    return (
       <div>
        <Helmet>
          <title>FoodFirst | login</title>
        </Helmet>
         <div className="flex justify-around bg-slate-200 items-center">
          <div>
             <img src="https://i.ibb.co/tLYNzVG/man-donating-food-5383932-4530159.webp" alt="" />
          </div>
          <div   className="h-screen bg-cover ">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-green-900">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-blur">
              <form onSubmit={handleLogIn} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-green-900 text-bold text-5xl">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input  "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-green-900 text-bold text-5xl">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-green-500 text-white border-none font-bold">Login</button>
                </div>
                <p className="text-green-900">
                  {" "}
                  Do not have an account? Please{" "}
                  <Link className="underline text-red-500" to="/register">
                    Register
                  </Link>
                </p>
              </form>
              <hr />
              <p className="text-3xl font-medium text-green-900 text-center mt-3">
                Alternative log in option
              </p>
              <button
                onClick={handleGoogle}
                className="items-center pl-36 border-none w-3/4 ml-10 m-5"
              >
                <FcGoogle className="h-[50px] w-[50px]"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
       </div>
    );
};

export default Login;