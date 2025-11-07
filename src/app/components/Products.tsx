"use client";
import { useState } from "react";
import { products } from "../data/data";
import ProductModal from "./ProductModal";
import Hilos from "./Hilos"; // 👈 Importamos el componente de hilos

export default function Products() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="productos" className="p-6 rounded-xl my-6 bg-white shadow-sm">
      {/* Sección de Productos principales */}
      <h2 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
        Productos
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {Object.values(products).map((p) => {
          const bgImage = p.imagen?.[0];

          return (
            <div
              key={p.id}
              onClick={() => setSelected(p.id)}
              className="
                relative p-30 border rounded 2x1 cursor-pointer flex flex-col overflow-hidden
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
                group
              "
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

              {/* Contenido */}
              <div className="relative z-10 bg-black/50 rounded-xl w-full transition-all duration-500 ease-in-out group-hover:scale-[1.02]">
                <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-md transition-all duration-500 ease-in-out group-hover:scale-105 text-center">
                  {p.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de productos */}
      {selected && (
        <ProductModal
          product={products[selected]}
          onClose={() => setSelected(null)}
        />
      )}

      {/* Sección de Hilos dentro del mismo bloque */}
      <div className="mt-16">
        <Hilos />
      </div>
    </section>
  );
}
