import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";



const ManageMyFood = () => {

     const allFoods = useLoaderData();
     console.log(allFoods)
    
    const { user} = useContext(AuthContext)
    console.log(user)

    const email = user.email;
    console.log(email)

   
    

    const filteredFood = allFoods.filter(foods => foods.donatorEmail === email)
    console.log(filteredFood)
    return (
        <div>
            
        </div>
    );
};

export default ManageMyFood;