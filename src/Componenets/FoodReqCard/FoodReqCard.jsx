
import Swal from 'sweetalert2';


const FoodReqCard = ({ foodReq }) => {

    console.log(foodReq)
  const { _id,  donatorName, location, ExDate, reqDate, Money } = foodReq || {}

  const handleCancelReq = () => {
    fetch(`https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/reqfood/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    })
  }

  return (
    <div>
      {
         <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-xl font-bold">
          <h2 className="card-title text-2xl">Donar Name:{donatorName}</h2>
          <p>Pickup Location:{location}</p>
          <p>Expire Date:{ExDate}</p>
          <p>Request Date:{reqDate}</p>
          <p>Request Amount: {Money}</p>
          <div className="card-actions justify-end">
            <button onClick={handleCancelReq} className="btn btn-primary bg-green-500 text-white font-bold border-none">Cancel Request</button>
          </div>
        </div>
      </div> 
      }
    </div>
  );
};

export default FoodReqCard;
