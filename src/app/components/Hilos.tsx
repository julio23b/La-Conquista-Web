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
              className="
                relative p-15 border rounded 2x1 cursor-pointer flex flex-col overflow-hidden
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
                group
              "
              style={{
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

              <div className="relative z-10 bg-black/50 p-1 rounded-xl w-full transition-all duration-500 ease-in-out group-hover:scale-[1.02]">
                <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-md transition-all duration-500 ease-in-out group-hover:scale-105 text-center">
                  {h.title}
                </h3>
                {h.color && (
                  <p className="text-sm text-gray-200 text-center">
                    {Array.isArray(h.color) ? h.color.join(", ") : h.color}
                  </p>
                )}
              </div>
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