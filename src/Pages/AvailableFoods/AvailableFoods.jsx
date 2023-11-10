import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../../Componenets/AvailableFoodsCard/AvailableFoodCard";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const AllFoods = useLoaderData();
  console.log(AllFoods);

  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filterFoods = (data, text) => {
    return data.filter((food) => food.foodName.toLowerCase().includes(text.toLowerCase()) )
  }

  const sortFoods = (data, order) => {
    return data.sort((a, b) => {
        if(order === "asc"){
            return new Date(a.ExDate) - new Date(b.ExDate)
        } else {
            return new Date(b.ExDate) - new Date(a.ExDate)
        }
    })
  }
  let filteredAndSortedData = [...AllFoods];
  if(filterText) {
    filteredAndSortedData = filterFoods(filteredAndSortedData, filterText);
  } 
    filteredAndSortedData = sortFoods(filteredAndSortedData, sortOrder)

  
  return (
    <div>
      <Helmet>
        <title>FoodFirst | All Foods</title>
      </Helmet>
        <h2 className="text-5xl font-bold text-center my-5">All Available <span className="text-green-500">Foods</span> </h2>
      <div className="flex justify-center gap-10">
      <input
        type="text"
        placeholder="Search by food name"
        defaultValue={filterText}
        className="input input-bordered w-full max-w-xs "
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button className="btn bg-green-500 text-white" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>Sort By Expire Date</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
      {
        filteredAndSortedData.map((food)=> <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard> )
      }
      </div>
    </div>
  );
};

export default AvailableFoods;
