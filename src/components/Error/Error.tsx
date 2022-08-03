import React from "react";

const Error = () => {
  return (
    <div className="w-full bg-white h-[120vh] pt-10">
      <div className=" bg-white flex flex-col items-center  p-16 rounded-lg gap-4">
        <span className=" text-red-500 text-9xl font-semibold">404</span>
        <span className=" text-3xl">opps! Page not found</span>
        <span className="text-lg text-center mt-2">
          Oops! The page you are looking for does not exist, it might have been
          moved or deleted
        </span>
        <div className="flex items-center justify-center gap-6 uppercase">
          <div className="button border-primary">Home</div>
          <div className="button bg-red-400 border-red-400">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Error;
