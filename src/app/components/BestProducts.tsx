"use client";
import Image from "next/image";
import { products } from "../data/data";

type ProductType = (typeof products)[keyof typeof products];

function ProductCard({ product }: { product: ProductType }) {
  const mainImage = product.imagen?.[0];

  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition flex flex-col bg-white">
      {mainImage && (
        <div className="relative w-full h-[350px] mb-4 overflow-hidden rounded-md">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-all duration-300"
          />
        </div>
      )}

      <h3 className="font-semibold text-gray-800">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>

      <div className="text-xs text-gray-500">
        <p>
          <strong>Colores:</strong> {product.colors}
        </p>
        <p>
          <strong>Tamaño:</strong> {product.size}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  
  const topProducts = Object.values(products).slice(0, 3);

  return (
    <section id="bestproducts" className="p-4 rounded-xl my-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Productos Más Vendidos</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {topProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
