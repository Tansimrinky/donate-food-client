import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailedCard from "../../Componenets/DetailedCard/DetailedCard";


const Details = () => {

    const [details, setDetails] = useState([])
    const {_id} = useParams()
    console.log(_id)
    const AllFoods = useLoaderData()
    console.log(AllFoods)

    useEffect(() => {
        const findFoodsDetails = AllFoods.filter(Foods => Foods._id == _id )
        if(findFoodsDetails) {
            setDetails(findFoodsDetails)
            console.log(findFoodsDetails)
        }
    }, [_id, AllFoods])
    console.log(details)
    return (
        <div>
            {
                details.map(detail => <DetailedCard key={detail._id} detail={detail}></DetailedCard>)
            }
        </div>
    );
};

export default Details;