import React from "react";
import "./Contact.css";
import img1 from "../../../img/bride-groom-pose-large-circle-lilac-garden_8353-1246.webp";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#952DDE] text-base-100 py-14">
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 py-14">
          <div className="relative">
            <img className="contact-img1" alt="" />
            <form className="contact-home w-3/4 py-14 px-10 z-10 relative mx-auto">
              <label className="pt-5">Full Name</label>
              <br />
              <input
                type="text"
                placeholder="Type here"
                className="input w-full  mb-5 home-contact-input "
              />
              <br />
              <label className="pt-5">Phone number</label>
              <br />
              <input
                type="text"
                placeholder="Type here"
                className="input w-full  mb-5 home-contact-input"
              />
              <br />
              <label className="pt-5">Message</label>
              <br />
              <input
                type="text"
                placeholder="Type here"
                className="input w-full  mb-5 home-contact-input"
              />
              <div className="">
                <input className="btn btn-active btn-primary" type="Submit" />
              </div>
            </form>
            <img className="contact-img2" alt="" />
          </div>

          <div className="mx-auto mt-12">
            {/* <img src={img1} alt="" /> */}
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                {/* <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  class="rounded-xl"
                /> */}
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-[#0f172a]">About</h2>
                <p className="text-[#0f172a]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum praesentium impedit ducimus ad quidem nostrum ipsa
                  mollitia deserunt, suscipit soluta. Rerum sit at distinctio
                  expedita aspernatur ullam corrupti dolore eligendi?
                </p>
                <div class="card-actions">
                  <button class="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
