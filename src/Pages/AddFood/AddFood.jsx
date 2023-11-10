import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const AddFood = () => {

    const { user } = useContext(AuthContext)
    console.log(user.email)

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImg = form.foodImg.value;
        const foodQuantity = form.foodQuantity.value;
        const Location = form.location.value;
        const ExDate = form.ExDate.value;
        const Info = form.info.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const DonatorImage = form.donatorImg.value;
        const addedFood = { foodName, foodImg, foodQuantity, Location, ExDate, Info, donatorName, donatorEmail , DonatorImage}

        console.log(addedFood)

        fetch('https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addedFood)
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Foods Added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })




    }
  return (
    <div>
        <h2 className="text-5xl text-black font-bold text-center">Add a <span className="text-green-700">Food</span> </h2>
        
        <div className="  bg-base">
        
        
      <div className=" flex justify-center gap-4 mt-6 mb-6">
      <div>
      
      <img className="h-[500px]" src="https://i.ibb.co/xL6qnjK/download-18.jpg" alt="" />
      </div>
        <div className="card flex  shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} className="card-body">
            {/* Food name */}
            
            <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-700 font-bold">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="food Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Food image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-700 font-bold">Food Image</span>
              </label>
              <input
                type="url"
                name="foodImg"
                placeholder="food Img"
                className="input input-bordered"
                required
              />
            </div>
            <div>
                {/* Food quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-700 font-bold">Food quantity (Servings)</span>
              </label>
              <input
                type="text"
                name="foodQuantity"
                placeholder="food Quantity"
                className="input input-bordered"
                required
              />
            </div>
            {/* pickup Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Pickup Location</span>
              </label>
              <input type="text" name="location" placeholder="Location" className="input input-bordered" required id="" />
              
            </div>
            {/* Expired date/time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Expired Date/Time</span>
              </label>
              <input type="datetime-local" name="ExDate" className="input input-bordered" required id="" />
            </div>
            </div>
            {/* Additional notes */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Additional Information</span>
              </label>
              <input
                type="text"
                name="info"
                placeholder="Info"
                className="input input-bordered "
                required
              />
            </div>
            {/* Donator name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Donator name</span>
              </label>
              <input
                type="text"
                name="donatorName"
                placeholder="donatorName"
                className="input input-bordered"
                readOnly={user.displayName}
                defaultValue={user.displayName}
                required
              />
            </div>
            {/* Donator email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Donator Email</span>
              </label>
              <input
                type="email"
                name="donatorEmail"
                placeholder="donatorEmail"
                className="input input-bordered"
                readOnly={user.email}
                defaultValue={user.email}
                required
              />
            </div>
            {/* Donator image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Donator Picture</span>
              </label>
              <input
                type="url"
                name="donatorImg"
                placeholder="DonatorImage"
                className="input input-bordered"
                readOnly={user.photoURL}
                defaultValue={user.photoURL}
                required
              />
            </div>
            </div>
            
            
            <button className="bg-green-500 rounded p-2 text-white font-bold">Add</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddFood;
