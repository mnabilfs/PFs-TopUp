import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Banner from "../assets/BannerPfsStore.png";

const FooterHome = () => {
  const paymentMethods = [
    {
      name: "QRIS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png",
    },
    {
      name: "DANA",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png",
    },
    {
      name: "GoPay",
      src: "https://antinomi.org/wp-content/uploads/2022/03/logo-gopay-vector.png",
    },
    {
      name: "Mandiri",
      src: "https://vectorez.biz.id/wp-content/uploads/2023/10/Logo-Bank-Mandiri.png",
    },
    {
      name: "BNI",
      src: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png",
    },
    {
      name: "BCA",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    },
  ];

  return (
    <footer className="text-gray-300 bg-gray-800 border-t border-gray-700 pt-14">
      <div className="container grid grid-cols-1 gap-8 px-16 mx-auto md:grid-cols-3">
        <div>
          <div className="mb-10">
            <h3 className="mb-2 text-base font-semibold text-white">Bantuan</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Pusat Bantuan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-white">
              PFs TopUp
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Tentang PFs Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  PFs Store Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Identitas Brand
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Aturan Penggunaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Pengembalian Dana
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Karir
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold text-white md:px-17">
            Metode Pembayaran
          </h3>
          <div className="px-4 mt-6 md:px-0">
            <div className="grid grid-cols-2 gap-4 justify-items-center md:w-80 md:grid-cols-3 lg:grid-cols-3 sm:items-center sm:justify-between">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex flex-col items-center p-2 bg-white border-t border-gray-400 rounded-lg md:h-17"
                >
                  <img
                    src={method.src}
                    alt={method.name}
                    className="w-auto mb-2 scale-74"
                  />
                  <span className="text-xs font-semibold text-gray-800">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold text-white">
            Ikuti PFs TopUp
          </h3>
          <div className="flex items-center gap-4 mb-18">
            <a href="#" className="hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTiktok size={24} />
            </a>
          </div>
            <img
              src={Banner}
              alt="Banner Mobile Legends"
              className="object-cover object-center w-full h-auto md:h-[150px] rounded-md"
            />
        </div>
      </div>

      <div className="pt-4 pb-4 mt-10 text-xs text-center text-white bg-purple-900">
        pfstore v1.0 © 2025 PT. PFs Company All Rights Reserved.
        <br />
        All other trademarks belong to their respective owners.
      </div>
    </footer>
  );
};

export default FooterHome;
