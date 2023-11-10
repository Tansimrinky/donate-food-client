import Carousal from "@itseasy21/react-elastic-carousel";

const Memories = () => {
    const items = [
        {id: 1, imges: 'https://i.ibb.co/9cgGGBY/istockphoto-472165353-612x612.jpg'},
        {id: 2, imges: 'https://i.ibb.co/C28kvHF/manpic.jpg'},
        {id: 3, imges: 'https://i.ibb.co/ZX9cnVd/images-3.jpg'}
    ]
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-4">Our Memories</h2>
           <Carousal>
           {
                items.map(item => (
                    <div key={item.id}>
                        <img className="h-96" src={item.imges} alt="" />
                    </div>
                ))
            }
           </Carousal>
        </div>
    );
};

export default Memories;