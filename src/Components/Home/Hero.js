import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/hands-holding-engagement-ring_23-2149488080.jpg?t=st=1658669211~exp=1658669811~hmac=f9038dc924de1a31702defb15b7dac6d6273bda0f3b355fc1e6906284c4609f3&w=1380)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
