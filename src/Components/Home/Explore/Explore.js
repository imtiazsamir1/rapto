import React from "react";
import img from "../../../img/hands-holding-engagement-ring_23-2149488080.webp";

const Explore = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 py-14 ">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div class="card w-96 bg-base-100 mx-auto mt-14">
          <div class="card-body">
            <h2 class="card-title text-5xl">Every moment is Precious</h2>
            <p className="text-1xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
