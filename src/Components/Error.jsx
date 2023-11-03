import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/Animation - 1698940049913.json";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col h-screen">
      <div className="m-auto">
        <Lottie animationData={errorAnimation} loop={true} />
        <p className="text-2xl mx-auto text-center font-semibold w-3/4 md:text-3xl mt-5 mb-8">
          {status} <br></br>
          {error?.message}
        </p>
        <div className="mx-auto w-fit">
          <Link to={"./"}>
            <button className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900">
              Back To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
