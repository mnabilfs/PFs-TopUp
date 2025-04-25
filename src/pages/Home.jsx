import React from 'react';
import Navbar from '../components/NavBar';
import FooterUniversal from '../components/FooterUniversal';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Navbar />

      <main className="flex-grow px-4 md:px-8 py-8 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          Selamat datang di Paper Fires Store
        </h1>
      </main>

      <FooterUniversal />
    </div>
  );
};

export default Home;