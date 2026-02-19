import React from 'react';

export const InstallationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/600x400?text=Nuestras+Instalaciones"
              alt="Nuestras instalaciones"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Texto e Historia */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-4">
                Sobre Escaparateros
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Somos una empresa especializada en diseño y construcción de escaparates modernos y funcionales. Con más de 15 años de experiencia en la industria, hemos transformado la imagen de cientos de negocios a través de nuestras soluciones innovadoras.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Nuestra misión es ayudar a nuestros clientes a crear experiencias visuales impactantes que atraigan y cautiven a sus clientes. Utilizamos materiales de alta calidad, diseño contemporáneo y la última tecnología en iluminación y decoración.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cada proyecto es único y personalizado según las necesidades específicas de tu negocio. Nuestro equipo de diseñadores y técnicos trabaja incansablemente para asegurar que cada escaparate sea una obra maestra que refleje la identidad de tu marca.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">
                  15+
                </div>
                <p className="text-sm text-gray-600 mt-2">Años de Experiencia</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-sm text-gray-600 mt-2">Clientes Satisfechos</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">
                  1000+
                </div>
                <p className="text-sm text-gray-600 mt-2">Proyectos Completados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
