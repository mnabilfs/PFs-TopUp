import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { numberToRupiah } from "../utils/number-to-rupiah";

const CardTopup = ({ selectedTopup, setSelectedTopup }) => {
  const [dataCardTopup, setDataCardTopup] = useState([
    { value: 3, price: 5000 },
    { value: 12, price: 15000 },
    { value: 28, price: 30000 },
    { value: 59, price: 50000 },
    { value: 85, price: 75000 },
    { value: 170, price: 150000 },
    { value: 240, price: 200000 },
    { value: 500, price: 400000 },
    { value: 600, price: 470000 },
    { value: 700, price: 540000 },
    { value: 850, price: 650000 },
    { value: 1000, price: 750000 },
    { value: 1200, price: 880000 },
    { value: 1400, price: 1000000 },
    { value: 1700, price: 1200000 },
    { value: 2000, price: 1400000 },
    { value: 2500, price: 1650000 },
    { value: 3000, price: 1900000 },
  ]);

  useEffect(() => {
    if (!selectedTopup) {
      setSelectedTopup(dataCardTopup[1]);
    }
  }, [dataCardTopup, selectedTopup, setSelectedTopup]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-5">
      {dataCardTopup.map((data, index) => {
        const isSelected =
          selectedTopup?.value === data.value &&
          selectedTopup?.price === data.price;

        return (
          <Card
            key={index}
            onClick={() => {
              setSelectedTopup(data);
            }}
            className={`cursor-pointer shadow-xl text-white transition-all duration-300 ${
              isSelected
                ? "!bg-purple-700 !border-purple-900"
                : "!bg-purple-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"
                alt=""
                className="h-[2rem] w-[2rem]"
              />
              <h5 className="text-md font-medium tracking-tight">
                {data.value} Diamonds
              </h5>
            </div>
            <div className="-mt-2 flex items-center justify-between">
              <span className="ml-4 text-md font-semibold">
                {numberToRupiah(data.price)}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardTopup;
