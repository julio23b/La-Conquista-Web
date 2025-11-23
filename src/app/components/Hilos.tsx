"use client";
import { useState } from "react";
import { hilos } from "../data/DataHilos";
import HiloModal from "./HiloModal";

export default function Hilos() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="hilos" className="p-6 rounded-xl my-6 bg-white shadow-sm">
      <h2 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
        Carreteles de Hilos
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {hilos.map((h) => {
          const bgImage = h.imagen?.[0];

          return (
            <div
              key={h.id}
              onClick={() => setSelected(h.id)}
              className={
                "relative p-6 h-56 border rounded 2x1 cursor-pointer flex flex-col overflow-hidden\n                transition-all duration-500 ease-in-out\n                hover:scale-105 hover:-translate-y-1 hover:shadow-2xl\n                group"
              }
              style={{
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "transparent",
              }}
            >
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
            </div>
          );
        })}
      </div>

      {selected && (
        <HiloModal
          hilo={hilos.find((x) => x.id === selected)!}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}