import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const DetailedCard = ({ detail }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    foodName,
    foodImg,
    foodQuantity,
    ExDate,
    Info,
    Location,
    donatorName,
    donatorEmail
  } = detail || {};
  const { _id } = useParams();
  console.log(_id);
  const AllFoods = useLoaderData();
  console.log(AllFoods);

  const currentDate = new Date().toISOString().split("T")[0];

  const handleRequest = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const foodName = form.get("foodName");
    const foodImg = form.get("foodImg")
    const donatorEmail = form.get("donatorEmail")
    const donatorName = form.get("donatorName")
    const reqName = user.displayName;
    const reqImg = user.photoURL;
    const reqEmail = user.email;
    const reqDate = form.get("reqDate")
    const location = form.get("location")
    const ExDate = form.get("ExDate")
    const Info = form.get("Info")
    const Money = form.get("Money")
    const reqFood = { foodName, foodImg, donatorEmail, donatorName, reqEmail, reqName, reqImg, reqDate, location, ExDate, Info, Money}
    console.log(reqFood)

    fetch('http://localhost:5000/reqfood', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(reqFood)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Food Request added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })


  }
  return (
    <div>
        <p className="text-5xl font-bold text-center">Deatailed Information of <span className="text-green-500">{foodName}</span></p>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-center font-bold">
            <p className="text-3xl">Donar Information:</p>
            <h2>Donar Name: <span className="font-medium">{donatorName}</span></h2>
            <p>Food Pickup Location: <span className="font-medium">{Location}</span> </p>
          </div>
          <div className="text-center font-bold">
            <p className="my-3">Food details:</p>
            <figure>
              <img className="h-[500px] cover" src={foodImg} />
            </figure>
            <div className="text-center my-3">
            <h2 className="">Food Name: <span className="font-medium">{foodName}</span> </h2>
            <h2 className="">Food Quantity: <span className="font-medium">{foodQuantity} servings</span></h2>
            <h2 className="">Expire Date: <span className="font-medium">{ExDate}</span> </h2>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-green-500 text-white font-bold"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Request
            </button>
            <dialog
              id="my_modal_5"
              className="modal "
            >
              <div className="modal-box">
                <form onSubmit={handleRequest}>
                    {/* food name */}
                <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                          Food Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="foodName"
                        placeholder="food Name"
                        className="input input-bordered"
                        readOnly={foodName}
                        defaultValue={foodName}
                        required
                      />
                    </div>
                    {/* food image */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                          Food Image
                        </span>
                      </label>
                      <input
                        type="url"
                        name="foodImg"
                        placeholder="food Image"
                        className="input input-bordered"
                        readOnly={foodImg}
                        defaultValue={foodImg}
                        required
                      />
                    </div>
                    {/* food Donator Email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                          Food Donator Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="donatorEmail"
                        placeholder="Donar Email"
                        className="input input-bordered"
                        readOnly={donatorEmail}
                        defaultValue={donatorEmail}
                        required
                      />
                    </div>
                    {/*Food donator Name  */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                          Food Donator Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="donatorName"
                        placeholder="Donar Name"
                        className="input input-bordered"
                        readOnly={donatorName}
                        defaultValue={donatorName}
                        required
                      />
                    </div>
                    {/* User Email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                          Your Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="UserEmail"
                        placeholder="User Name"
                        className="input input-bordered"
                        readOnly={user.email}
                        defaultValue={user.email}
                        required
                      />
                    </div>
                    {/* Request Date */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                         Request Date
                        </span>
                      </label>
                      <input
                        type="text"
                        name="reqDate"
                        placeholder="Req Date"
                        className="input input-bordered"
                        readOnly={currentDate}
                        defaultValue={currentDate}
                        required
                      />
                    </div>
                    {/* Pick up Location */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                         Pickup Location
                        </span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Pickup Location"
                        className="input input-bordered"
                        readOnly={Location}
                        defaultValue={Location}
                        required
                      />
                    </div>
                    {/* Expire Date */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                         Expire Date
                        </span>
                      </label>
                      <input
                        type="text"
                        name="ExDate"
                        placeholder="Expire Date"
                        className="input input-bordered"
                        readOnly={ExDate}
                        defaultValue={ExDate}
                        required
                      />
                    </div>
                    {/* Additional notes */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                         Additional Information (editable)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Info"
                        placeholder={Info}
                        className="input input-bordered"
                        // readOnly={Info}
                        // defaultValue={Info}
                        // value={Info}
                        required
                      />
                    </div>
                    {/* Donation Money */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl text-slate-700 font-bold">
                         Donation Money (editable)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Money"
                        placeholder="Add Requested Amount"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="flex justify-center mt-4" >
                    <input className="btn bg-green-500 text-white" type="submit" defaultValue="Request" />
                    </div>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
