import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { numberToRupiah } from "../utils/number-to-rupiah";

const CardTopup = ({ selectedTopup, setSelectedTopup }) => {
  const [dataCardTopup, setDataCardTopup] = useState([
    { value: 3, price: 1171 },
    { value: 5, price: 1423 },
    { value: 12, price: 3323 },
    { value: 19, price: 5223 },
    { value: 28, price: 7600 },
    { value: 44, price: 11400 },
    { value: 59, price: 15200 },
    { value: 85, price: 21850 },
    { value: 170, price: 43700 },
    { value: 240, price: 61750 },
    { value: 296, price: 76000 },
    { value: 408, price: 104500 },
    { value: 568, price: 142500 },
    { value: 875, price: 218500 },
    { value: 2010, price: 475000 },
    { value: 4830, price: 1140000 }
    
  ]);

  useEffect(() => {
    if (!selectedTopup) {
      setSelectedTopup(dataCardTopup[1]);
    }
  }, [dataCardTopup, selectedTopup, setSelectedTopup]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
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
                : "!bg-purple-900 !border-purple-900"
            }`}
          >
            <div className="flex items-center gap-1 md:gap-3 ">
              <img
                src="https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"
                alt=""
                className="h-[1.2rem] w-[1.2rem] md:h-[2rem] md:w-[2rem]"
              />
              <h5 className="text-xs md:text-lg font-medium tracking-tight">
                {data.value} Diamonds
              </h5>
            </div>
            <div className="-mt-2 flex items-center justify-between ">
              <span className="ml-4 text-xs md:text-lg font-semibold">
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
