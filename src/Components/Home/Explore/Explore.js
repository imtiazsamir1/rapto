import React from "react";
import img from "../../../img/banner.png";

const Explore = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 py-14">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div class="card w-96 bg-base-100 mx-auto">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
