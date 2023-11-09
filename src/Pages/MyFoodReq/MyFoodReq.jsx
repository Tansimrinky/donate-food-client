import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import FoodReqCard from "../../Componenets/FoodReqCard/FoodReqCard";

const MyFoodReq = () => {

    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(email)
    const reqFoods = useLoaderData()
    console.log(reqFoods)

    const filteredFood = reqFoods.filter(food => food.reqEmail === email)
    console.log(filteredFood)
    return (
        <div >
            <h2 className="text-5xl font-bold text-center">My Food Request</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between"> 
            {
                filteredFood.map(foodReq => <FoodReqCard key={foodReq._id} foodReq={foodReq}></FoodReqCard> )
            }
        </div>
        </div>
    );
};

export default MyFoodReq;