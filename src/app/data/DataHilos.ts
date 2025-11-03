export type Hilo = {
  id: string;
  title: string;
  imagen?: string[];
  descripcion?: string;
  color?: string[];
  metros?: string;
};

export const hilos: Hilo[] = [
  {
    id: "hilo-001",
    title: "Carretel Poliéster",
    imagen: ["/img-products/Hilos/blanco.webp"],
    descripcion: "Hilo de poliéster resistente, uso industrial y doméstico.",
    color: ["Blanco"],
    metros: "4000m",
  },
  {
    id: "hilo-002",
    title: "Carretel Poliéster",
    imagen: ["/img-products/Hilos/negro.webp"],
    descripcion: "Hilo de poliéster resistente, uso industrial y doméstico.",
    color: ["Negro"],
    metros: "4000m",
  },
  {
    id: "hilo-003",
    title: "Carretel Poliéster",
    imagen: ["/img-products/Hilos/grisclaro119.webp"],
    descripcion: "Hilo de poliéster resistente, uso industrial y doméstico.",
    color: ["Gris claro 119"],
    metros: "4000m",
  },
    {
    id: "hilo-004",
    title: "Carretel Poliéster",
    imagen: ["/img-products/Hilos/azulfrancia147.webp", 
      "/img-products/Hilos/rojo57.webp",
      "/img-products/Hilos/terracota59.webp" , 
      "/img-products/Hilos/verdebrillante145.webp"],
    descripcion: "Hilo de poliéster resistente, uso industrial y doméstico.",
    color: ["Azul Francia 147","Rojo 57","Terracota 59","Verde Brillante 145"], 
    metros: "4000m",
  },
];