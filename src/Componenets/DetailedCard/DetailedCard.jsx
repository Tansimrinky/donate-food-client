import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";

const DetailedCard = ({ detail }) => {
//   const { user } = useContext(AuthContext);

  const {
    foodName,
    foodImg,
    foodQuantity,
    ExDate,
    Info,
    Location,
    donatorName,
    DonatorImage,
  } = detail || {};
  const { _id } = useParams();
  console.log(_id);
  const AllFoods = useLoaderData();
  console.log(AllFoods);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <div>
                <p>Donar Information:</p>
                <h2>Donar Name: {donatorName}</h2>
               <p>Food Pickup Location: {Location}</p>
            </div>
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default DetailedCard;
