import React from 'react';
import Navbar from '../components/NavBar';
import FooterUniversal from '../components/FooterUniversal';
import { Carousel } from 'flowbite-react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Home = () => {

  const slides = [
    'https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/01/Kapan-event-kof-2024.jpg?fit=1200%2C675&ssl=1',
    'https://editor.pasundanekspres.id/storage/uploads/conten/FfWijX7sOeMOsJh5.webp',
    'https://cdn.api.upstation.media/upstation_x/a05429bce4ea12557ac6b7f6bdb000d960240dc841a6605e521e9ad105ab95df422b8df12eff0f385228b4db8825d4895f194622c2cc0a77801d72a5998c6ca7',
    'https://foto.kontan.co.id/0o8l7sXhESA6BtWCs7O9WbaWDts=/smart/2023/02/15/429053515p.jpg',
    'https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2023/07/foto-profil-ml-menyala.jpg?fit=1000%2C563&ssl=1',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Navbar />

      <div className="px-4 md:px-26 mt-11">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          
          <div className="md:col-span-2 relative">
            <div className="h-64 md:h-96">
              <Carousel
                slideInterval={5000}
                indicators={true}
                leftControl={
                  <button
                    aria-label="Previous slide"
                    className="bg-white p-2 rounded-full shadow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-purple-700 hover:text-white active:bg-purple-800"
                  >
                    <HiChevronLeft className="text-black" size={24} />
                  </button>
                }
                rightControl={
                  <button
                    aria-label="Next slide"
                    className="bg-white p-2 rounded-full shadow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-purple-700 hover:text-white active:bg-purple-800"
                  >
                    <HiChevronRight className="text-black" size={24} />
                  </button>
                }
                className="rounded-lg shadow-lg h-full"
                theme={{
                  scrollContainer: {
                    base: 'flex h-full snap-mandatory overflow-hidden scroll-smooth rounded-lg',
                  },
                  indicators: {
                    wrapper: 'absolute flex justify-center space-x-3 left-100 right-0 -bottom-6',
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

          <div className="flex flex-col gap-4">
            <img
              src={slides[0]}
              alt="Preview 1"
              className="object-cover w-full h-48 md:h-46 rounded-lg shadow-lg"
            />
            <img
              src={slides[1]}
              alt="Preview 2"
              className="object-cover w-full h-48 md:h-46 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-30 mt-11">
  <h2 className="flex items-center text-white text-xl font-semibold mb-4">
    <img
      src="https://www.transparentpng.com/thumb/diamond/O3UOts-diamond-best-png.png"
      alt="Diamond"
      className="h-6 w-6 md:h-8 md:w-8 mr-2"
    />
    Top Up Game
  </h2>
  <div className="flex gap-19 overflow-x-auto pb-4">

    <div className="flex-shrink-0 cursor-pointer">
      <div className="bg-purple-900 rounded-lg overflow-hidden">
        <img
          src="https://play-lh.googleusercontent.com/ovqnOQDL8SPTocGIfDpZCJrsRfr4063AXkoG4xOTf7SPj6FPxmPEA5ChsFf9bOCB4bI"
          alt="Mobile Legends"
          className="w-16 h-16 md:w-40 md:h-40 object-cover"
        />
        <div className="px-2 py-1 text-center">
          <span className="text-white text-xs font-semibold">
            Mobile Legends
          </span>
        </div>
      </div>
    </div>
    
    <div className="flex-shrink-0 cursor-pointer">
      <div className="bg-purple-900 rounded-lg overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EAG9DqC3a_aGUkcMYOtMC1IwnMWxOUpQvQ&s"
          alt="PUBG Mobile"
          className="w-16 h-16 md:w-40 md:h-40 object-cover"
        />
        <div className="px-2 py-1 text-center">
          <span className="text-white text-xs font-semibold">
            PUBG Mobile
          </span>
        </div>
      </div>
    </div>
    
    <div className="flex-shrink-0 cursor-pointer">
      <div className="bg-purple-900 rounded-lg overflow-hidden">
        <img
          src="https://play-lh.googleusercontent.com/40e-a0ZjIvFUrBPCuw2dpfJY--8jCPJxVW6dMrQ1EBl8LYhX7ZdC9DpUtg69Joq8x6U"
          alt="Honkai Impact 3rd"
          className="w-16 h-16 md:w-40 md:h-40 object-cover"
        />
        <div className="px-2 py-1 text-center">
          <span className="text-white text-xs font-semibold">
            Honkai Impact 3rd
          </span>
        </div>
      </div>
    </div>
    
    <div className="flex-shrink-0 cursor-pointer">
      <div className="bg-purple-900 rounded-lg overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIOTjQn295QJG51JoDtCe-WZisHNK2j2d8g&s"
          alt="Genshin Impact"
          className="w-16 h-16 md:w-40 md:h-40 object-cover"
        />
        <div className="px-2 py-1 text-center">
          <span className="text-white text-xs font-semibold">
            Genshin Impact
          </span>
        </div>
      </div>
    </div>
    
    <div className="flex-shrink-0 cursor-pointer">
      <div className="bg-purple-900 rounded-lg overflow-hidden">
        <img
          src="https://yt3.googleusercontent.com/ekLwLEDxzfU9NRYD0dO30dOiet0gulvm4NX9evsyvmjyzo5vDnhokKTYXP03GSxp8SIviJyxTIQ=s900-c-k-c0x00ffffff-no-rj"
          alt="Free Fire"
          className="w-16 h-16 md:w-40 md:h-40 object-cover"
        />
        <div className="px-2 py-1 text-center">
          <span className="text-white text-xs font-semibold">
            Free Fire
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

      <FooterUniversal />
    </div>
  );
};

export default Home;