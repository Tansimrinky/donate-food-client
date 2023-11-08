const Banner = () => {
    return (
      <div className="">
        <div
          className="hero h-[500px] "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/G5RX0ZT/medium-shot-volunteers-with-food-donations-23-2149182005.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">FOOD DONATION</h1>
              <p className="mb-5 text-3xl font-bold">Get in the holiday mood; donate some food..</p>
              <p className="mb-5 text-3xl font-bold">THANKS for GIVING food!</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  