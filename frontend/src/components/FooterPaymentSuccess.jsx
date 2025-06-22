import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const FooterPaymentSuccess = () => {
  return (
    <footer className="text-gray-300 bg-gray-800 border-t border-gray-700 pt-14">
      <div className="grid grid-cols-1 gap-8 px-16 mx-auto md:grid-cols-3">
        <div>
          <div className="mb-10">
            <h3 className="mb-2 text-base font-semibold text-white">
              Untuk Penerbit
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Daftarkan judul Anda di PaperFires
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pelajari lebih lanjut tentang kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-base font-semibold text-white">Bantuan</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Hubungi Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pusat Bantuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
            </li>
          </ul>
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
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 pt-4 pb-4 mt-10 text-xs text-center text-gray-800 bg-gray-200">
        <p>©Hak Cipta PaperFires Store</p>
        <p className="font-medium hover:underline cursor-pointer">Pemasaran dan Kemitraan</p>
        <p className="font-medium hover:underline cursor-pointer">Untuk Penerbit Game</p>
        <p className="font-medium hover:underline cursor-pointer">Syarat & Ketentuan</p>
        <p className="font-medium hover:underline cursor-pointer">Kebijakan Privasi</p>
        <p className="font-medium hover:underline cursor-pointer">Bounty Bug</p>
        <p className="font-medium hover:underline cursor-pointer">Menjadi Distributor</p>
      </div>
    </footer>
  );
};

export default FooterPaymentSuccess;
