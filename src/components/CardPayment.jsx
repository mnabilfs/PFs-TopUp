"use client";
import React from "react";
import { Card } from "flowbite-react";
import { numberToRupiah } from "../utils/number-to-rupiah";

function CardPayment({ img, title, active, onClick }) {

  return (
    <Card
      onClick={onClick}
      className={`w-[12rem] cursor-pointer shadow-2xl !border-1 h-30 ${
        active ? "!bg-purple-700 " : "!bg-gray-100 border-purple-900"
      }`}
    >
      <div className="flex flex-col items-center gap-1">
        <img src={img} alt="" className="scale-65" />
        <p
          className={`text-sm font-medium ${
            active ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
        <h5
          className={`text-md font-bold tracking-tight ${
            active ? "text-white" : "text-blue-600"
          }`}
        >
          {numberToRupiah(1000)}
        </h5>
      </div>
    </Card>
  );
}

export default CardPayment;
