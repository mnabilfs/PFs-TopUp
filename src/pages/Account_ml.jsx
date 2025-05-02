import React from "react";

const ProductDetail = () => {
  const sellerPhoneNumber = "6281234567890"; // ganti dengan nomor penjual asli
  const whatsappLink = `https://wa.me/${sellerPhoneNumber}`;

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="bg-purple-900 p-4 flex justify-between items-center">
        <div className="text-xl font-bold">PAPER FIRES STORE</div>
        <input
          type="text"
          placeholder="Cari produk disini"
          className="rounded-lg px-3 py-1 text-black w-1/2"
        />
        <div className="flex gap-4 items-center">
          <i className="fa-regular fa-envelope" />
          <i className="fa-solid fa-cart-shopping" />
          <i className="fa-regular fa-user" />
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col lg:flex-row p-4 gap-8">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-2/3">
          <img
            src="https://i.pinimg.com/736x/cd/54/ef/cd54efa2496b840ace4800f214708847.jpg"
            alt="Mobile Legends Account"
            className="rounded-xl w-full max-w-[600px] object-cover max-h-[350px] mx-auto"
          />
          <div className="flex gap-2 mt-4 justify-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-700 rounded" />
            ))}
          </div>
          <h2 className="text-lg font-bold mt-4 text-center">Deskripsi Produk</h2>
          <p className="text-sm text-gray-300 mt-2 text-center">
            Akun GG dengan skin lengkap, rank tinggi, promo murah. Siap push rank!
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow">
            <h1 className="text-xl font-semibold">
              (853) Akun GG Mobile Legends PROMO MURAH
            </h1>
            <p className="text-sm text-gray-400">Mobile Legends</p>
            <p className="text-lg font-bold mt-2 text-green-400">Rp500.000 / Akun</p>
            <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-xs inline-block mt-2">
              Ditambahkan pada: 24/02/2025
            </span>
          </div>

          <div className="bg-gray-800 border border-purple-800 p-4 rounded-lg shadow">
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
              className="block text-center bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Hubungi Penjual
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white p-4 text-center text-xs mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span>© 2025 PFS Store™</span>
          <span>Pemasaran dan Kemitraan</span>
          <span>Syarat dan Ketentuan</span>
          <span>Kebijakan Privasi</span>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
