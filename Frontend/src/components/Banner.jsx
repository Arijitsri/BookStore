import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            Hello and Welcome! Embark on a Journey to Learn Something{" "}
              <span className="text-red-500">New Every Day!</span>
            </h1>
            <p className="text-sm md:text-xl">
            Step into a world where stories come alive, 
            knowledge knows no bounds, and imagination takes flight. 
            Discover the joy of reading with our carefully curated collection of the latest bestsellers, 
            timeless classics, and hidden gems.
            <br /><br />
            Whether you’re seeking inspiration, exploring new ideas, 
            or simply escaping into a captivating story, we’ve got the perfect book for every reader.
            Let’s turn every day into an opportunity to grow, dream, and discover.
            <br /><br />
            </p>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
