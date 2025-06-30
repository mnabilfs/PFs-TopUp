import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { numberToRupiah } from "../utils/number-to-rupiah";

const CardTopup = ({ selectedTopup, setSelectedTopup }) => {
  const [dataCardTopup, setDataCardTopup] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTopupData = async () => {
    try {
      const response = await fetch("https://prepaid.iak.dev/api/pricelist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "game",
          operator: "mobile_legend",
          username: "081355788875",
          sign: "2cc0a92dc66154a7c637aeee8ecae2d8",
          status: "active",
        }),
      });
  
      const json = await response.json();
  
      if (json.data && json.data.pricelist) {
        const formattedData = json.data.pricelist.map((item) => ({
          value: parseInt(item.product_nominal.replace(/\D/g, "")),
          price: item.product_price,
          icon: item.icon_url,
          product_code: item.product_code,
          raw: item,
        }));
  
        // 🔽 Urutkan berdasarkan harga (termurah ke termahal)
        formattedData.sort((a, b) => a.price - b.price);
  
        setDataCardTopup(formattedData);
        setSelectedTopup(formattedData[0]); // default selection
      }
    } catch (error) {
      console.error("Failed to fetch topup data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopupData();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
      {dataCardTopup.map((data, index) => {
        const isSelected =
          selectedTopup?.value === data.value &&
          selectedTopup?.price === data.price;

        return (
          <Card
            key={index}
            onClick={() => setSelectedTopup(data)}
            className={`cursor-pointer shadow-xl text-white transition-all duration-300 ${
              isSelected
                ? "!bg-purple-700 !border-purple-900"
                : "!bg-purple-900 !border-purple-900"
            }`}
          >
            <div className="flex items-center gap-1 md:gap-3">
              <img
                src={"https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"}
                alt="diamond"
                className="h-[1.2rem] w-[1.2rem] md:h-[2rem] md:w-[2rem]"
              />
              <h5 className="text-xs md:text-lg font-medium tracking-tight">
                {data.value} Diamonds
              </h5>
            </div>
            <div className="-mt-2 flex items-center justify-between">
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
