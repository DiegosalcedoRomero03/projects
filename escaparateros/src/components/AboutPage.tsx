import React from 'react';
import { ModelCarousel } from './ModelCarousel';
import { InstallationsSection } from './InstallationsSection';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { AppointmentForm } from './AppointmentForm';

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sobre Escaparateros</h1>
          <p className="text-xl text-blue-100">
            Transformamos espacios en experiencias visuales extraordinarias
          </p>
        </div>
      </section>

      {/* Installations Section */}
      <InstallationsSection />

      {/* Models Carousel */}
      <ModelCarousel title="Nuestros Modelos de Escaparates" />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Appointment Form */}
      <AppointmentForm />
    </main>
  );
};
