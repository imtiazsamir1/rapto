import React from "react";
import img2 from "../../../img/6-62037_check-mark-icon-png-transparent-png.png";
import "./Pakages.css";

const Pakages = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 py-14 m-14">
      <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10"></figure>
        <div class="card-body items-center text-center">
          <h1 className="text-5xl">$300</h1>
          <h2 class="card-title">wedding basic</h2>
          <h2 class="card-title">
            For most businesses event like book fair, craft fair
          </h2>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>limited space access</p>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Secuirty facility</p>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>event support</p>
          <div className="pak-icon w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Decoration design</p>
          <div className="pak-icon w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Per day bill</p>
          <div class="card-actions">
            <button class="btn btn-primary">Chose Plan</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10"></figure>
        <div class="card-body items-center text-center">
          <h1 className="text-5xl">$600</h1>
          <h2 class="card-title">Business fair</h2>
          <h2 class="card-title">
            For most businesses event like book fair, craft fair
          </h2>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>limited space access</p>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Food arrangements</p>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>mangement suppor</p>
          <div className="pak-icon w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Decoration design</p>
          <div className="pak-icon w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Billed as shift</p>
          <div class="card-actions">
            <button class="btn btn-primary">Chose Plan</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10"></figure>
        <div class="card-body items-center text-center">
          <h1 className="text-5xl">$800</h1>
          <h2 class="card-title">Wedding plus</h2>
          <h2 class="card-title">
            For most businesses event like book fair, craft fair
          </h2>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Full space access</p>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Dedicated team</p>
          <div className="grid-cols-2 w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>Buffet food</p>
          <div className="pak-icon w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>premium Decoration</p>
          <div className="pak-icon w-5 h-5">
            <img src={img2} alt="" />
          </div>
          <p>pay as plan</p>
          <div class="card-actions">
            <button class="btn btn-primary">Chose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pakages;
