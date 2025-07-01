import React from "react";

const CustomerService = () => {
  const handleClick = () => {
    const phoneNumber = "6289699158331";
    const message = "Halo, saya ingin bertanya mengenai produk Anda.";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <>
      <div className="relative group">
        <button
          onClick={handleClick}
          aria-label="Buka Chat"
          className="
            fixed bottom-6 right-6
            w-16 h-16
            bg-[#0D174F]
            rounded-full
            flex items-center justify-center
            text-white
            shadow-lg
            hover:scale-110 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition-all duration-200 ease-in-out
            cursor-pointer
          "
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>

        <div className="absolute px-2 py-1 text-xs text-white transition-opacity duration-300 bg-black rounded opacity-0 bottom-20 right-6 group-hover:opacity-100">
          Chat CS
        </div>
      </div>
    </>
  );
};

export default CustomerService;
