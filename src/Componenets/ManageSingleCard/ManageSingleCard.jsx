
import  {useState, useEffect} from "react"
import Swal from "sweetalert2";

const ManageSingleCard = ({ reqFood }) => {
  const { foodName,   reqName, reqImg, reqEmail, reqDate } = reqFood || {};
  const [AllFoods, setAllFoods] = useState()
  const [status, setStatus] = useState()
  useEffect( () => {
    fetch("https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/foods")
   .then(res => res.json())
   .then(data => {
     console.log(data)
     setAllFoods(data)
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  }, [])

 

  const handleFoodReq = () => {
    if (AllFoods) {
      const filteredFood = AllFoods.filter((food) => food.foodName === foodName);
      if (filteredFood.length > 0) {
        const id = filteredFood[0]._id;

        fetch(`https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(data => {
            if(data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your food request has been deleted.", "success")
            }
          })
  };
}
  }
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-center text-5xl font-bold ">Request Information</h2>
          <p className="text-3xl font-medium">Name: {reqName}</p>
          <img src={reqImg} alt="" />
          <p className="text-3xl font-medium">Email:{reqEmail}</p>
          <p className="text-xl font-medium">Request Date: {reqDate}</p>
          <div className="card-actions justify-end">
            <button onClick={handleFoodReq} className="btn btn-primary bg-green-500 text-white border-none">{

              status ? "Delivered" : "pending"
            }

            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ManageSingleCard;
