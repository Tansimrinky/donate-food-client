import { Link } from "react-router-dom";
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";




const Register = () => {

    const {createUser} = useContext(AuthContext)
    

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('Photo')
        const email = form.get('email')
        const password = form.get('password')
        if(!/[A-Z]/.test(password)){
          Swal.fire('Your Password should have at least one Uppercase character. ')
          return
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
          Swal.fire('Your Password should have at least one special character.')
          return
        }
        createUser(email, password)
        .then(result => { 
          Swal.fire('Successfully registered your account..')
          updateProfile(result.user, {
            displayName: name, 
            photoURL: photo
          })
          .then(() => {
            //profile updated
          })
          .catch(()=>{
            Swal.fire("An error occured. Profile is not updated.")
          })
          
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
              });

        })
     }

    return (
        <div className="my-5">
            <div
            
            // style={{backgroundImage: "url('https://i.ibb.co/Wvqh8BG/images-1.jpg')"}}
            
            
            className="sm:h-[700px] lg:h-screen bg-slate-500 bg-cover">
        <div className="hero h-fit">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Register Now</h1>
            </div>
            <div className="card flex-shrink-0  lg:w-[500px] shadow-2xl bg-blur">
              <form onSubmit={handleRegister} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-bold text-5xl">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-bold text-5xl">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Your Picture"
                    className="input input-bordered"
                    name="Photo"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-bold text-5xl">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-bold text-5xl">Password</span>
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
                  <button className="btn text-3xl text-bold">Register</button>
                </div>
                <p className="text-white">Already have an account? PLease <Link className="underline" to="/login">Log in</Link>.</p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;