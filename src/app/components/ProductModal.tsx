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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Título y descripción */}
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

        {/* Carrusel de imágenes */}
        {images.length > 0 && (
          <div className="relative w-full h-[500px] max-h-[70vh] rounded-xl overflow-hidden bg-gray-100">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-4 md:p-5 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <span className="text-2xl md:text-3xl leading-none">‹</span>
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-4 md:p-5 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <span className="text-2xl md:text-3xl leading-none">›</span>
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
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
