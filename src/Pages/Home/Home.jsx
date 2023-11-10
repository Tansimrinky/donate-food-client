import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Componenets/Banner/Banner";
import FeaturedFoods from "../../Componenets/FeaturedFoods/FeaturedFoods";
import OurGoal from "../../Componenets/OurGoal/OurGoal";
import Memories from "../../Componenets/Memories/Memories";
import { Helmet } from "react-helmet-async";




const Home = () => {

    const AllFeaturedFoods = useLoaderData();

    const sortedFoods = AllFeaturedFoods.sort((a, b) => parseInt(b.foodQuantity
        ) - parseInt(a.foodQuantity
            ))
    const topSixFoods = sortedFoods.slice(0, 6)
    console.log(topSixFoods)
    return (
        <div>
            <Helmet>
                <title>FoodFirst | Home</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="text-center text-5xl font-bold mt-7 mb-7">Featured Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {
                topSixFoods.map(topSixFood => <FeaturedFoods key={topSixFood._id} topSixFood={topSixFood}></FeaturedFoods>)
            }
            </div>
            <div className="flex justify-center mb-8">
            <Link to="/availablefoods"><button className="btn bg-green-500 text-white font-bold flex justify-center items-center">Show All Foods</button></Link>
            </div>
            <OurGoal></OurGoal>
            <Memories></Memories>
        </div>
    );
};

export default Home;