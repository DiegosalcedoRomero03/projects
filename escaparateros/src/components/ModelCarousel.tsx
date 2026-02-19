import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ModelCarouselProps {
  title: string;
}

export const ModelCarousel: React.FC<ModelCarouselProps> = ({ title }) => {
  const models = [
    {
      id: 1,
      name: 'Escaparate Clásico',
      image: 'https://via.placeholder.com/400x300?text=Escaparate+Clásico',
    },
    {
      id: 2,
      name: 'Escaparate Moderno',
      image: 'https://via.placeholder.com/400x300?text=Escaparate+Moderno',
    },
    {
      id: 3,
      name: 'Escaparate Premium',
      image: 'https://via.placeholder.com/400x300?text=Escaparate+Premium',
    },
    {
      id: 4,
      name: 'Escaparate Vintage',
      image: 'https://via.placeholder.com/400x300?text=Escaparate+Vintage',
    },
    {
      id: 5,
      name: 'Escaparate Minimalista',
      image: 'https://via.placeholder.com/400x300?text=Escaparate+Minimalista',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{title}</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          speed={800}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {models.map((model) => (
            <SwiperSlide key={model.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img src={model.image} alt={model.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">{model.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
