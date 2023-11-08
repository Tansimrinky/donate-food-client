import { Link } from "react-router-dom";


const AvailableFoodCard = ({food}) => {
    const {
        _id, 
        foodName,
        foodImg,
        foodQuantity,
        ExDate,
        Info,
        Location,
        donatorName,
        DonatorImage,
      } = food || {};
    return (
        <div>
      <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl mb-10">
        <figure className="mt-6">
          <img className="h-96 cover"
            src={foodImg}
          />
        </figure>
        <div className="card-body text-slate-600 font-bold">
          <h2 className="card-title text-3xl">{foodName}</h2>
          <p>Additional Information: <span className="font-medium">{Info}</span> </p>
          <p>Expire Date: <span className="font-medium">{ExDate}</span> </p>
          <p>Food Quantity: <span className="font-medium">{foodQuantity} servings</span></p>
          <p>Pickup Location: <span className="font-medium">{Location}</span></p>
          <div className="flex gap-2 items-center">
          <img className="h-[50px] w-[50px] rounded-full" src={DonatorImage} alt="" />
             <p className="">Donator Name: <span className="font-medium">{donatorName}</span></p>
             
          </div>
          <div className="card-actions justify-center">
          <Link to={`/food/${_id}`}><button className="btn  bg-green-500 border-none text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AvailableFoodCard;