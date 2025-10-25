"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductModalProps {
  product: {
    id: string;
    title: string;
    description: string;
    colors: string;
    size: string;
    imagen?: string[];
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [current, setCurrent] = useState(0);
  const images = product.imagen ?? [];

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    // Fondo clickeable
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Evita cerrar si tocan dentro
        className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[90vh]"
      >
        {/* Botón cerrar táctil */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute right-3 top-3 p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-200 shadow-md active:scale-95 transition md:right-4 md:top-4"
        >
          <X size={28} />
        </button>

        {/* Contenido */}
        <h2 className="mb-2 text-2xl font-bold text-gray-800">{product.title}</h2>
        <p className="mb-4 text-gray-600">{product.description}</p>

        {/* Colores */}
        <h3 className="mb-2 text-lg font-semibold text-gray-800">Colores:</h3>
        <p className="mb-4 text-gray-600">{product.colors}</p>

        {/* Medidas */}
        <h3 className="mb-2 text-lg font-semibold text-gray-800">Medidas:</h3>
        <ul className="mb-6 list-disc pl-5 text-gray-700">
          {product.size.split(",").map((s, i) => (
            <li key={i}>{s.trim()}</li>
          ))}
        </ul>

        {/* Carrusel */}
        {images.length > 0 && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
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
                alt={`${product.title} ${current + 1}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </motion.div>

            {images.length > 1 && (
              <>
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
      </motion.div>
    </div>
  );
}
