import React from "react";
import { useEffect } from "react";
import errorIcon from "../assets/error404.png";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Not Found";
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = errorIcon; 
    document.head.appendChild(link);

    return () => {
      link.href = null;
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-2xl font-medium text-white">404</h1>
        <div className="w-[.5px] bg-white self-stretch"></div>
        <h1 className="text-md font-light text-white">
          This page could not be found.
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
