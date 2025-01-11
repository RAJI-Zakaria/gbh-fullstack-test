import React from "react";

const notFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl">404</h1>

      <h1 className="text-4xl text-red-500">
        The page you are looking for doesn&apos;t exist or has been moved{" "}
      </h1>
    </div>
  );
};

export default notFound;
