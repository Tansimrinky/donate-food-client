import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { useTable } from 'react-table';
import { Footer } from "flowbite-react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageMyFood = () => {
    const allFoods = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user.email;
    const filteredFood = allFoods.filter(foods => foods.donatorEmail === email);
    console.log(filteredFood)
    const id = filteredFood[0]?._id;
    const filteredFoodObj = filteredFood[0]
    console.log(filteredFoodObj)

    
    console.log(id)

    const data = React.useMemo(()=> filteredFood, [filteredFood])
    const columns = React.useMemo(() => [
        {
            Header: "Picture of Food",
            accessor: "foodImg",
            Cell: ({ value }) => <img src={value} alt="Food" style={{ width: '100px' }} />,
        },
        {
            Header: "Name of Food",
            accessor: "foodName"
        },
        {
            Header: "Actions",
            accessor: "action",
            Cell: ({row}) => (
                <div className="">
                    <button onClick={() => document.getElementById("my_modal_5").showModal()}className="btn bg-green-500 text-white m-5" >Edit</button>
                    <dialog
              id="my_modal_5"
              className="modal "
            >
              <div className="modal-box">
              <form onSubmit={handleUpdateFood} className="card-body">
            {/* Food name */}
            
            <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-700 font-bold">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="food Name"
                className="input input-bordered"
                defaultValue={row.original.foodName}
                required
              />
            </div>
            {/* Food image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-700 font-bold">Food Image</span>
              </label>
              <input
                type="url"
                name="foodImg"
                placeholder="food Img"
                className="input input-bordered"
                defaultValue={row.original.foodImg}
                required
              />
            </div>
            <div>
                {/* Food quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-700 font-bold">Food quantity (Servings)</span>
              </label>
              <input
                type="text"
                name="foodQuantity"
                placeholder="food Quantity"
                className="input input-bordered"
                defaultValue={row.original.foodQuantity}
                required
              />
            </div>
            {/* pickup Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Pickup Location</span>
              </label>
              <input type="text" name="location" placeholder="Location" className="input input-bordered" defaultValue={row.original.Location} required id="" />
              
            </div>
            {/* Expired date/time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Expired Date/Time</span>
              </label>
              <input type="datetime-local" name="ExDate" className="input input-bordered" defaultValue={row.original.ExDate} required id="" />
            </div>
            </div>
            {/* Additional notes */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Additional Information</span>
              </label>
              <input
                type="text"
                name="info"
                placeholder="Info"
                className="input input-bordered "
                defaultValue={row.original.Info}
                required
              />
            </div>
            {/* Donator name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Donator name</span>
              </label>
              <input
                type="text"
                name="donatorName"
                placeholder="donatorName"
                className="input input-bordered"
                readOnly={row.original.donatorName}
                defaultValue={row.original.donatorName}
                required
              />
            </div>
            {/* Donator email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Donator Email</span>
              </label>
              <input
                type="email"
                name="donatorEmail"
                placeholder="donatorEmail"
                className="input input-bordered"
                readOnly={row.original.donatorEmail}
                defaultValue={row.original.donatorEmail}
                required
              />
            </div>
            {/* Donator image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl text-slate-700 font-bold">Donator Picture</span>
              </label>
              <input
                type="url"
                name="donatorImg"
                placeholder="DonatorImage"
                className="input input-bordered"
                readOnly={row.original.DonatorImage}
                defaultValue={row.original.DonatorImage}
                required
              />
            </div>
            </div>
            
            
            <button className="bg-green-500 rounded p-2 text-white font-bold">Update</button>
          </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button>Close</button>
                  </form>
                </div>
              </div>
            </dialog>

                   
                    <button 
                    onClick={handleDelete}
                    className="btn bg-green-500 text-white m-5" >Delete</button>
                    <Link to={`/manage/${id}`}><button className="btn bg-green-500 text-white m-5" >Manage</button></Link>
                </div>
            ) 
        }
    ], [])



    const handleUpdateFood = (e) => {
        e.preventDefault();
         const form = e.target;

         const foodName = form.foodName.value;
         const foodImg = form.foodImg.value;
         const foodQuantity = form.foodQuantity.value;
         const Location = form.location.value;
         const ExDate = form.ExDate.value;
         const Info = form.info.value;
         const donatorName = form.donatorName.value;
         const donatorEmail = form.donatorEmail.value;
         const DonatorImage = form.donatorImg.value;
        const updatedFood = { foodName, foodImg, foodQuantity, Location, ExDate, Info, donatorName, donatorEmail , DonatorImage}
        console.log(updatedFood)
        fetch(`https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/foods/${id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedFood)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'success!',
                    text: 'Food Information updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset() 
        })
        
    }
   
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      }); 

   

      const handleDelete = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You won\'t be able to revert this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://food-donate-server-cohyaoia5-tansimrinky.vercel.app/foods/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.success) {
                  Swal.fire('Deleted!', 'Your food has been deleted.', 'success');
                } else {
                  Swal.fire('Error!', 'Failed to delete the food.', 'error');
                }
              })
              .catch((error) => {
                console.error(error);
                Swal.fire('Error!', 'Failed to delete the food.', 'error');
              });
          }
        });
      };
      

 

    return (
           <div>
            <Helmet>
              <title>FoodFirst | manage my food</title>
            </Helmet>
            {
              filteredFood ? <div className="h-screen">
              <table {...getTableProps()} className="w-full border-4 border-t-2 ">
                  <thead className="border-4"> 
                      {headerGroups.map(headerGroup => 
                          <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map(column => 
                                  <th {...column.getHeaderProps()} className="border-4">
                                        {column.render("Header")}
                                  </th>
                             )}
                          </tr>
                       )}
                  </thead>
                  <tbody {...getTableBodyProps()} className="w-full border-4 border-y-4">
                      {
                          rows.map(row => {
                              prepareRow(row)
                              return <tr {...row.getRowProps()} className="w-full">
                                  {row.cells.map(cell =>
                                       <td {...cell.getCellProps()} className="border-4 text-center">
                                         {cell.render("Cell")}
                                  </td> )}
                              </tr>
                          })
                      }
  
                  </tbody>
              </table>
              <Footer></Footer>
  
             </div> : <div>No Data found</div>
            }
           </div>
      );
};

export default ManageMyFood;