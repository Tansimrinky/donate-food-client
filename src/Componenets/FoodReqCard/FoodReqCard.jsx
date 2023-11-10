import {useState} from 'react'


const FoodReqCard = ({ foodReq }) => {

    const [deleted, setDeleted] = useState()
    console.log(foodReq)
  const { _id,  donatorName, location, ExDate, reqDate, Money } = foodReq || {}

  const handleCancelReq = () => {
    fetch(`https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/reqfood/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        setDeleted(data)
    })
  }

  return (
    <div>
      {
        deleted ? <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Donar Name:{donatorName}</h2>
          <p>Pickup Location:{location}</p>
          <p>Expire Date:{ExDate}</p>
          <p>Request Date:{reqDate}</p>
          <p>Request Amount: {Money}</p>
          <div className="card-actions justify-end">
            <button onClick={handleCancelReq} className="btn btn-primary bg-green-500 text-white font-bold border-none">Cancel Request</button>
          </div>
        </div>
      </div> : <div>No Data Found</div>
      }
    </div>
  );
};

export default FoodReqCard;
