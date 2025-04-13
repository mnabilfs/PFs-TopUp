import React, { useState } from "react";
import { Card } from "flowbite-react";

const CardTopup = () => {
  const [dataCardTopup, setDataCArdTopup] = useState([
    { value: 3, price: 5000 },
    { value: 12, price: 15000 },
    { value: 28, price: 30000 },
    { value: 59, price: 50000 },
    { value: 85, price: 75000 },
    { value: 170, price: 150000 },
    { value: 240, price: 200000 },
    { value: 500, price: 400000 },
  ]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {dataCardTopup.map((data, index) => (
        <Card key={index} className="!bg-purple-800 text-white shadow-md">
          <h5 className="text-xl font-semibold tracking-tight">
            {data.value} Diamonds
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">Rp {data.price}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardTopup;
