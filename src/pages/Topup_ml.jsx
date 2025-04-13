import React from "react";
import HeaderBar from "../components/HeaderBar";
import CardTopup from "../components/CardTopup";

const Topup_ml = () => {
  return (
    <div className="b-white w-full">
      {/* Banner */}
      <div className="px-20 flex flex-col gap-20">
        <div className="w-full relative flex justify-center mt-10">
          <img
            src=""
            alt="Banner Mobile Legends"
            className=" object-cover object-center h-[300px] w-[1285px] bg-gray-300"
          />
        </div>

        {/* Step 1 */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-red-300">
            <HeaderBar step={1} label={"Pilih Nominal"} width={"w-full"} />
            <CardTopup />
          </div>

          <div className="col-span-1 bg-blue-300">
            <HeaderBar step={2} label={"Masukan Player ID"} width={"w-full"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup_ml;
