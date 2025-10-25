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
    // Fondo clickeable para cerrar
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // evita cerrar si tocan dentro
        className="relative w-full max-w-4xl rounded-2xl bg-white shadow-xl overflow-y-auto max-h-[90vh]"
      >
        {/* Barra superior con título y botón cerrar */}
        <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 bg-white z-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
            {product.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 md:p-3 rounded-full text-gray-600 hover:bg-gray-200 active:scale-95 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <p className="mb-4 text-gray-600">{product.description}</p>

          <h3 className="mb-2 text-lg font-semibold text-gray-800">Colores:</h3>
          <p className="mb-4 text-gray-600">{product.colors}</p>

          <h3 className="mb-2 text-lg font-semibold text-gray-800">Medidas:</h3>
          <ul className="mb-6 list-disc pl-5 text-gray-700">
            {product.size.split(",").map((s, i) => (
              <li key={i}>{s.trim()}</li>
            ))}
          </ul>

          {/* Carrusel de imágenes */}
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
        </div>
      </motion.div>
    </div>
  );
}

