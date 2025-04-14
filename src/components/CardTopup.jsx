import React, { useState } from "react";
import { Card } from "flowbite-react";

const CardTopup = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [dataCardTopup, setDataCArdTopup] = useState([
    { value: 3, price: 5000 },
    { value: 12, price: 15000 },
    { value: 28, price: 30000 },
    { value: 59, price: 50000 },
    { value: 85, price: 75000 },
    { value: 170, price: 150000 },
    { value: 240, price: 200000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
    { value: 500, price: 400000 },
  ]);

  const formatIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-5">
      {dataCardTopup.map((data, index) => (
        <Card
          key={index}
          onClick={() => setSelectedCard(index)}
          className={`cursor-pointer shadow-xl text-white  ${
            selectedCard === index ? "!bg-purple-700 " : "!bg-purple-900"
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
              {formatIDR(data.price)}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardTopup;
