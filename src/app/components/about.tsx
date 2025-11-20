"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/img-nosotros/nosotros.webp",
  "/img-nosotros/telar.jpg",
  "/img-nosotros/telar1.jpg",
  "/img-nosotros/telar2.webp",
  "/img-nosotros/telar3.webp",
  "/img-nosotros/telar4.webp",
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <section id="about" className="p-6 rounded-xl my-6 bg-white shadow-sm">
      <h2 className="text-4xl font-semibold mb-6 text-gray-800 text-center">Sobre Nosotros</h2>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Carrusel */}
        <div className="relative bg-gray-50 rounded-lg p-4 flex items-center justify-center">
          <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-md">
            {images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
          >
            ‹
          </button>

          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"}`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Texto "Acerca de" */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Nuestros productos:</h3>
          <p className="text-gray-600 mb-4">
            Son piezas únicas y exclusivas. Cada diseño se inspira en la elegancia de lo rústico, con líneas simples y una paleta de colores neutros que evocan calidez y confort, combinados con la sencillez y calidad de lo esencial. Nos dedicamos a crear piezas que no solo embellecen cualquier espacio, sino que también reflejan el esfuerzo y la destreza perfeccionados a lo largo de los años. Cada alfombra es una obra de arte en sí misma, diseñada para enriquecer tu hogar con estilo y autenticidad.
          </p>

          <p className="text-gray-600">
            Trabajamos con procesos responsables y materiales seleccionados para
            garantizar consistencia y resistencia en cada pieza. Si deseas conocer
            más sobre nuestro proceso o realizar un pedido, contáctanos por los
            canales en la cabecera o pie de página.
          </p>
        </div>
      </div>
    </section>
  );
}
