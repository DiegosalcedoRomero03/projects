import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos González',
      business: 'Tienda de Ropa Premium',
      comment:
        'Escaparateros transformó completamente mi tienda. El diseño es moderno y atrae a muchos más clientes. ¡Excelente trabajo!',
      rating: 5,
      image: 'https://via.placeholder.com/100x100?text=Carlos',
    },
    {
      id: 2,
      name: 'María López',
      business: 'Joyería Exclusiva',
      comment:
        'La atención al detalle de su equipo es increíble. Mi escaparate ahora es el punto focal de toda la cuadra.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100?text=María',
    },
    {
      id: 3,
      name: 'Roberto Díaz',
      business: 'Zapatería Moderna',
      comment:
        'Profesionales, puntuales y creativos. Recomiendo ampliamente sus servicios a cualquier comerciante.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100?text=Roberto',
    },
    {
      id: 4,
      name: 'Ana Martínez',
      business: 'Boutique de Accesorios',
      comment:
        'Superaron todas mis expectativas. El ROI fue increíble, las ventas aumentaron en 40% el primer mes.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100?text=Ana',
    },
    {
      id: 5,
      name: 'Luis Rodríguez',
      business: 'Tienda de Electrónica',
      comment:
        'Impresionante cómo lograron combinar estética moderna con funcionalidad. Mi tienda jamás se vio tan bien.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100?text=Luis',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Lo que dicen nuestros clientes</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          speed={800}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-testimonials"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 flex-1 mb-6 italic">"{testimonial.comment}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
