import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import FooterUniversal from "../components/FooterUniversal";
import CustomerService from "../components/CustomerService";

const ProductDetail = () => {
  const sellerPhoneNumber = "6289527400005";
  const whatsappLink = `https://wa.me/${sellerPhoneNumber}`;

  useEffect(() => {
    document.title = "Account Mobile Legends | Paper Fires Store";
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="flex flex-col gap-8 p-4 lg:flex-row">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-2/3">
          <img
            src="https://i.pinimg.com/736x/cd/54/ef/cd54efa2496b840ace4800f214708847.jpg"
            alt="Mobile Legends Account"
            className="rounded-xl w-full max-w-[600px] object-cover max-h-[350px] mx-auto"
          />
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-700 rounded" />
            ))}
          </div>
          <h2 className="mt-4 text-lg font-bold text-center">
            Deskripsi Produk
          </h2>
          <p className="mt-2 text-sm text-center text-gray-300">
            Akun GG dengan skin lengkap, rank tinggi, promo murah. Siap push
            rank!
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full gap-4 lg:w-1/3">
          <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow">
            <h1 className="text-xl font-semibold">
              (853) Akun GG Mobile Legends PROMO MURAH
            </h1>
            <p className="text-sm text-gray-400">Mobile Legends</p>
            <p className="mt-2 text-lg font-bold text-green-400">
              Rp500.000 / Akun
            </p>
            <span className="inline-block px-3 py-1 mt-2 text-xs text-white bg-purple-800 rounded-full">
              Ditambahkan pada: 24/02/2025
            </span>
          </div>

          <div className="p-4 bg-gray-800 border border-purple-800 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold">Penjual</span>
              <span className="text-sm">Izzay</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold">Harga</span>
              <span className="text-sm">Rp. 500.000</span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-center text-white bg-purple-800 rounded-lg hover:bg-purple-700"
            >
              Hubungi Penjual
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterUniversal />
      <CustomerService/>
    </div>
  );
};

export default ProductDetail;
