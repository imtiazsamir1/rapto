import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/my2zpbk/banner.png)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Bashundhara (ICCB)</h1>
            <p class="mb-5 text-2xl">The perfect venue for your next event</p>
            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
