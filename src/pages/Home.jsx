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

      <div className="px-4 md:px-30 mt-13">
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

      <FooterUniversal />
    </div>
  );
};

export default Home;