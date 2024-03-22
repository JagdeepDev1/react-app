import React, { useEffect, useState } from "react";
import axios from "axios";

function Facts() {
  const [facts, setFacts] = useState("");

  const getFactData = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setFacts(res.data.fact);
    });
  };

  useEffect(() => {
    getFactData();
  }, []);

  return (
    <div className="p-6 h-screen w-screen w-full justify-center items-center">
      <div className="flex">
        <button
          type="button"
          className=" mx-auto rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={getFactData}
        >
          Get Fact
        </button>
      </div>

      <div className="mx-auto justify-center items-center">
        <p> {facts}</p>
      </div>
    </div>
  );
}

export default Facts;
