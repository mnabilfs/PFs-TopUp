import React from "react";
import Navbar from "../components/NavBar";
import FooterHome from "../components/FooterHome";
import { Carousel } from "flowbite-react";
import { HiChevronLeft, HiChevronRight, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import CustomerService from "../components/CustomerService";

const Home = () => {
  const slides = [
    "https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/01/Kapan-event-kof-2024.jpg?fit=1200%2C675&ssl=1",
    "https://editor.pasundanekspres.id/storage/uploads/conten/FfWijX7sOeMOsJh5.webp",
    "https://cdn.api.upstation.media/upstation_x/a05429bce4ea12557ac6b7f6bdb000d960240dc841a6605e521e9ad105ab95df422b8df12eff0f385228b4db8825d4895f194622c2cc0a77801d72a5998c6ca7",
    "https://foto.kontan.co.id/0o8l7sXhESA6BtWCs7O9WbaWDts=/smart/2023/02/15/429053515p.jpg",
    "https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2023/07/foto-profil-ml-menyala.jpg?fit=1000%2C563&ssl=1",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Navbar />

      <div className="px-10 mt-6 md:px-26 md:mt-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          <div className="relative md:col-span-2 col-span-0">
            <div className="h-40 md:h-96">
              <Carousel
                slideInterval={5000}
                indicators={true}
                leftControl={
                  <button
                    aria-label="Previous slide"
                    className="absolute left-0 z-10 p-1 transition-colors duration-200 ease-in-out transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow cursor-pointer md:p-1 top-1/2 hover:bg-purple-700 hover:text-white active:bg-purple-800"
                  >
                    <HiChevronLeft className="w-5 h-5 text-black md:w-8 md:h-8" />
                  </button>
                }
                rightControl={
                  <button
                    aria-label="Next slide"
                    className="absolute right-0 z-10 p-1 transition-colors duration-200 ease-in-out transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow cursor-pointer md:p-1 top-1/2 hover:bg-purple-700 hover:text-white active:bg-purple-800"
                  >
                    <HiChevronRight className="w-5 h-5 text-black md:w-8 md:h-8" />
                  </button>
                }
                className="h-full rounded-lg shadow-lg"
                theme={{
                  scrollContainer: {
                    base: "flex h-full snap-mandatory overflow-hidden scroll-smooth rounded-lg",
                  },
                  indicators: {
                    wrapper:
                      "absolute flex justify-center space-x-3 md:space-x-5 md:left-100 right-0 -bottom-4 md:-bottom-6",
                    base: "h-2 w-2 md:h-3 md:w-3 rounded-full bg-white",
                  },
                }}
              >
                {slides.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="object-cover w-full h-full"
                  />
                ))}
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col hidden gap-4 sm:block">
            <div className="flex flex-col gap-4">
              <img
                src={slides[0]}
                alt="Preview 1"
                className="object-cover w-full h-48 rounded-lg shadow-lg md:h-46"
              />
              <img
                src={slides[1]}
                alt="Preview 2"
                className="object-cover w-full h-48 rounded-lg shadow-lg md:h-46"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-25 mt-9 md:mt-17">
        <h2 className="flex items-center mb-4 font-semibold text-white text-l md:text-xl">
          <img
            src="https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"
            alt="Diamond"
            className="w-6 h-6 mr-1 md:h-8 md:w-8 md:mr-2"
          />
          Top Up Game
        </h2>

        {/*** MOBILE: grid 3 kolom, otomatis 2 baris, tanpa scroll ***/}
        <div
          className="grid grid-cols-3 gap-4 md:flex md:gap-20 md:overflow-x-auto md:pb-5"
        >
          {/* Baris 1: 3 kartu */}
          <Link to="/topup_ml" className="flex justify-center col-span-1">
            <div className="overflow-hidden bg-purple-900 border-white rounded-lg cursor-pointer border-1 h-37 md:h-50 w-28 md:w-40">
              <img
                src="https://play-lh.googleusercontent.com/QXCVbZd0d71ho4MIYHHxnY6BJFGXI-fzRS5MXJXU1n4n2T-VdQgB1vrdJpydokA34UA"
                alt="Mobile Legends"
                className="object-cover w-full h-auto"
              />
              <div className="px-2 py-2 text-center">
                <span className="text-white text-[.70rem] md:text-sm font-semibold font-Poppins">
                  Mobile Legends
                </span>
              </div>
            </div>
          </Link>

          <div className="flex justify-center col-span-1">
            <div className="overflow-hidden bg-purple-900 border-white rounded-lg cursor-pointer border-1 h-37 md:h-50 w-28 md:w-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EAG9DqC3a_aGUkcMYOtMC1IwnMWxOUpQvQ&s"
                alt="PUBG Mobile"
                className="object-cover w-full h-auto"
              />
              <div className="px-2 py-2 text-center">
                <span className="text-white text-[.71rem] md:text-sm font-semibold font-Poppins">
                  PUBG Mobile
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center col-span-1">
            <div className="overflow-hidden bg-purple-900 border-white rounded-lg cursor-pointer border-1 h-37 md:h-50 w-28 md:w-40">
              <img
                src="https://play-lh.googleusercontent.com/40e-a0ZjIvFUrBPCuw2dpfJY--8jCPJxVW6dMrQ1EBl8LYhX7ZdC9DpUtg69Joq8x6U"
                alt="Honkai Impact 3rd"
                className="object-cover w-full h-auto"
              />
              <div className="px-2 py-2 text-center">
                <span className="text-white text-[.71rem] md:text-sm font-semibold font-Poppins">
                  Honkai Impact 3rd
                </span>
              </div>
            </div>
          </div>

          {/* Baris 2: 2 kartu tersisa */}
          <div className="flex justify-center col-span-1">
            <div className="overflow-hidden bg-purple-900 border-white rounded-lg cursor-pointer border-1 h-37 md:h-50 w-28 md:w-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIOTjQn295QJG51JoDtCe-WZisHNK2j2d8g&s"
                alt="Genshin Impact"
                className="object-cover w-full h-auto"
              />
              <div className="px-2 py-2 text-center">
                <span className="text-white text-[.71rem] md:text-sm font-semibold font-Poppins">
                  Genshin Impact
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center col-span-1">
            <div className="overflow-hidden bg-purple-900 border-white rounded-lg cursor-pointer border-1 h-37 md:h-50 w-28 md:w-40">
              <img
                src="https://play-lh.googleusercontent.com/6llpraFcTI0rEUuRpWEG9NWWblvm106y5JXcDzu60ACuaUYDD3i70a-p9_QM65NsGDE=w240-h480-rw"
                alt="Free Fire"
                className="object-cover w-full h-auto"
              />
              <div className="px-2 py-2 text-center">
                <span className="text-white text-[.71rem] md:text-sm font-semibold font-Poppins">
                  Free Fire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-25 mt-11">
        <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
          <HiOutlineUser className="w-6 h-6 mr-2 md:h-8 md:w-8" />
          Akun
        </h2>
        <div className="flex pb-24 overflow-x-auto gap-11 hide-scrollbar">
          {[
            "https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/202443/6jxatlj4e6t6l44n5coq.jpg",
            "https://www.koranmandala.com/wp-content/uploads/2025/01/Kumpulan-10-akun-ML-gratis-masih-aktif-untuk-hari-ini-12-Januari-2025.webp",
            "https://media.karousell.com/media/photos/products/2024/8/19/jual_akun_mobile_legend_ml_ex__1724081610_6cf031ba_progressive.jpg",
            "https://d1x91p7vw3vuq8.cloudfront.net/web/20210225/0581732cbcf3452ae84fa7dd3ce90dca7330409fa5eb59083ac2ecac38a32485.jpg",
            "https://media.karousell.com/media/photos/products/2024/5/20/jual_akun_pubg_sultan_1716230916_e01d4b17_progressive",
          ].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 cursor-pointer">
              <Link to="/Account_ml">
                <img
                  src={src}
                  alt={`Akun ${idx + 1}`}
                  className="object-cover rounded-lg shadow-lg h-35 md:w-114 md:h-56"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <FooterHome />
      <CustomerService/>
    </div>
  );
};

export default Home;