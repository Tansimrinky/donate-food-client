import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ManageSingleCard from "../../Componenets/ManageSingleCard/ManageSingleCard";

const ManageSingleFood = () => {
  const requestedFood = useLoaderData();
  console.log(requestedFood);

  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);

  const filteredReqFood = requestedFood.filter(
    (foods) => foods.donatorEmail === email
  );
  console.log(filteredReqFood);

  return (
    <div className="h-screen">
      {
      filteredReqFood ? <div className="mb-45">
      <div className="mb-45">
      {
         filteredReqFood.map(reqFood => <ManageSingleCard key={reqFood._id} reqFood={reqFood}></ManageSingleCard> )
      }
      </div>
     </div> : <div>No requested food found</div>
    }
    </div>
  );
};

export default ManageSingleFood;
