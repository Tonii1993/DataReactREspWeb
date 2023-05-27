import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analatics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="data analatics laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            adipisci, doloribus asperiores voluptatum dolor nihil laudantium
            fuga eos necessitatibus ad commodi libero laborum minus doloremque
            officiis iure quae tenetur totam, blanditiis rerum quam sequi.
            Delectus similique necessitatibus a! Soluta optio cumque labore,
            ipsum suscipit, quae quas reprehenderit nulla quis id nam minus
            laboriosam. Odit harum rerum fuga, eligendi nihil nostrum.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx- md:mx-0 py-3">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analatics;
