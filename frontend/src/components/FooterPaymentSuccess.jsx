import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const FooterPaymentSuccess = () => {
  return (
    <footer className="w-full pt-10 text-gray-300 bg-gray-800 border-t border-gray-700">
      <div className="grid w-full grid-cols-1 gap-10 px-6 py-8 md:grid-cols-3 md:px-16">
        {/* Kolom 1 */}
        <div>
          <h3 className="mb-3 text-base font-semibold text-white">
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

        {/* Kolom 2 */}
        <div>
          <h3 className="mb-3 text-base font-semibold text-white">Bantuan</h3>
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

        {/* Kolom 3 */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-white">
            Ikuti PFs TopUp
          </h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bawah Footer */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 px-4 py-4 mt-10 text-xs text-center text-gray-800 bg-gray-200 md:flex-row">
        <p>© Hak Cipta PaperFires Store</p>
        <p className="font-medium cursor-pointer hover:underline">
          Pemasaran dan Kemitraan
        </p>
        <p className="font-medium cursor-pointer hover:underline">
          Untuk Penerbit Game
        </p>
        <p className="font-medium cursor-pointer hover:underline">
          Syarat & Ketentuan
        </p>
        <p className="font-medium cursor-pointer hover:underline">
          Kebijakan Privasi
        </p>
        <p className="font-medium cursor-pointer hover:underline">
          Bounty Bug
        </p>
        <p className="font-medium cursor-pointer hover:underline">
          Menjadi Distributor
        </p>
      </div>
    </footer>
  );
};

export default FooterPaymentSuccess;
