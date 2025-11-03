"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HiloModalProps {
  hilo: {
    id: string;
    title: string;
    imagen?: string[];
    descripcion?: string;
    color?: string[]; 
    metros?: string;
  };
  onClose: () => void;
}

export default function HiloModal({ hilo, onClose }: HiloModalProps) {
  const [current, setCurrent] = useState(0);
  const images = hilo.imagen ?? [];

  // Mostrar color asociado a la imagen actual si `hilo.color` es un array
  const displayedColor = (() => {
    if (!hilo.color) return undefined;
    if (Array.isArray(hilo.color)) {
      // Si hay la misma cantidad de colores que imágenes, usamos el color por índice
      if (images.length > 1 && hilo.color.length === images.length) {
        return hilo.color[current];
      }
      // Si sólo hay una imagen, o los colores no coinciden en longitud, mostramos la lista completa
      return hilo.color.join(", ");
    }
    return hilo.color;
  })();

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  
  return (
    // Fondo semitransparente clickeable
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-y-auto max-h-[90vh]"
      >
        {/* 🔹 Barra superior con título y botón de cierre */}
        <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-white z-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
            {hilo.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 md:p-3 rounded-full text-gray-600 hover:bg-gray-200 active:scale-95 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* 🔹 Contenido principal */}
        <div className="p-6">
          {/* Descripción */}
          {hilo.descripcion && (
            <p className="mb-4 text-gray-600">{hilo.descripcion}</p>
          )}

          {/* Color */}
          {displayedColor && (
            <>
              <h3 className="mb-1 text-lg font-semibold text-gray-800">
                Color:
              </h3>
              <p className="mb-4 text-gray-600">{displayedColor}</p>
            </>
          )}

          {/* Metros */}
          {hilo.metros && (
            <>
              <h3 className="mb-1 text-lg font-semibold text-gray-800">
                Metros por carrete:
              </h3>
              <p className="mb-4 text-gray-600">{hilo.metros}</p>
            </>
          )}

          {/* 🔹 Carrusel de imágenes */}
          {images.length > 0 && (
            <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden bg-gray-100">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`${hilo.title} ${current + 1}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </motion.div>

              {images.length > 1 && (
                <>
                  {/* Botones de navegación */}
                  <button
                    onClick={prevImage}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    ›
                  </button>

                  {/* Indicadores inferiores */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full ${
                          i === current ? "bg-gray-800" : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
