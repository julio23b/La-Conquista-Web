type Products = {
  id: string;
  title: string;
  description: string;
  colors: string;
  size: string;
  imagen?: string[];
};

export const products: Record<string, Products> = {

  alfombraPeludaRedonda: {
    id: "alfombraPeludaRedonda",
    title: "Alfombra Peluda Redonda",
    description:
      "Alfombra peluda redonda de alta calidad, perfecta para añadir confort y estilo a cualquier ambiente.",
    colors: "Variedad de colores",
    size: "50cm a 2m de diámetro",
    imagen: [
      "/img-products/Alfombra/alfom-redonda5.jpg",
      "/img-products/Alfombra/alfom-redonda1.jpg",
      "/img-products/Alfombra/alfom-redonda2.webp",
      "/img-products/Alfombra/alfom-redonda3.webp",
      "/img-products/Alfombra/alfom-redonda4.jpg",
    ],
  },
  alfombraPeludaCuadrada: {
    id: "alfombraPeludaCuadrada",
    title: "Alfombra Peluda Cuadrada",
    description:
      "Alfombra peluda cuadrada, suave y decorativa, ideal para dormitorios o livings modernos.",
    colors: "Variedad de colores",
    size: "De 60cm x 60cm a 2m x 2m",
    imagen: ["/img-products/Alfombra/alfom-Cuadrada1.webp"],
  },
  alfombraPeludaRectangular: {
    id: "alfombraPeludaRectangular",
    title: "Alfombra Peluda Rectangular",
    description:
      "Alfombra peluda rectangular, resistente y elegante, perfecta para pasillos o espacios amplios.",
    colors: "Variedad de colores",
    size: "De 30cm x 60cm a 1m x 2m",
    imagen: [
      "/img-products/Alfombra/alfom-rectangular1.webp",
      "/img-products/Alfombra/alfom-rectangular2.jpg",
      "/img-products/Alfombra/alfom-rectangular3.jpg", 
      "/img-products/Alfombra/alfom-rectangular4.webp", 
      "/img-products/Alfombra/alfom-rectangular5.webp", 
      "/img-products/Alfombra/alfom-rectangular6.webp", 
      "/img-products/Alfombra/alfom-rectangular7.webp"],
  },
  alfombraLiving:{
    id: "alfombraLiving",
    title: "Alfombra de Living",
    description: "Alfombras especies para living o salas de estar",
    colors: "Blanco, gris",
    size: "2m x 2m",
    imagen: [
      "/img-products/Alfombra/alfomLiving.jpg",
      "/img-products/Alfombra/alfomLiving2.jpg",
    ],

  },
  alfombraPeludaOvalada:{
    id: "alfombraPeludaOvalada",
    title:"Alfombra Peluda Ovalada",
    description:"Alfombra peluda ovalada, suave y decorativa, ideal para dormitorios",
    colors:"Variedad en colores",
    size: "De 30cm x 60cm a 1m x 2m",
    imagen:[
      "/img-products/Alfombra/alfom-ovalada1.jpg",
      "/img-products/Alfombra/alfom-ovalada2.jpg",
      "/img-products/Alfombra/alfom-ovalada3.jpg",
      "/img-products/Alfombra/alfom-ovalada4.jpg",
      "/img-products/Alfombra/alfom-ovalada5.jpg",
      "/img-products/Alfombra/alfom-ovalada6.jpg",
      "/img-products/Alfombra/alfom-ovalada7.jpg",
    ],
  },
  alfombraPeludaCorazon: {
    id: "alfombraPeludaCorazon",
    title: "Alfombra Peluda Corazón",
    description:
      "Alfombra peluda en forma de corazón, ideal para dormitorios juveniles o espacios creativos.",
    colors: "Variedad de colores",
    size: "De 50cm x 50cm a 70cm x 90cm",
    imagen: ["/img-products/Alfombra/alfom-corazon1.webp",
              "/img-products/Alfombra/alfom-corazon2.webp",
              "/img-products/Alfombra/alfom-corazon3.webp",
              "/img-products/Alfombra/alfom-corazon4.webp",
    ],
  },
  alfombraDeBaño: {
    id: "alfombraDeBaño",
    title: "Alfombra de Baño",
    description:
      "Alfombra de baño absorbente y práctica, brinda seguridad y confort en tu rutina diaria.",
    colors: "Variedad de colores",
    size: "50cm x 60cm",
    imagen: ["/img-products/Alfombra/veteada.webp",
              "/img-products/Alfombra/veteada1.webp",
              "/img-products/Alfombra/veteada2.webp",
    ],
  },
  alfombraConFlecos: {
    id: "alfombraConFlecos",
    title: "Alfombra con Flecos",
    description:
      "Alfombra con flecos decorativos, tejida en algodón, ideal para darle un toque rústico y natural a tus ambientes.",
    colors: "Variedad de colores",
    size: "De 50cm x 1m a 50cm x 2m",
    imagen: [ "/img-products/Alfombra/veteada-con-flecos2.jpg",
            "/img-products/Alfombra/veteada-con-flecos.webp",
            "/img-products/Alfombra/veteada-con-flecos1.webp",
  ],
  },
  caminoDeMesa: {
    id: "caminoDeMesa",
    title: "Camino de Mesa",
    description:
      "Camino de mesa elegante y funcional, realza la decoración del comedor con un toque artesanal.",
    colors: "Variedad de colores",
    size: "35cm x 1.6m",
    imagen: ["/img-products/Camino-de-mesa/cmesa1.webp",
              "/img-products/Camino-de-mesa/cmesa2.webp",
              "/img-products/Camino-de-mesa/cmesa3.webp",
              "/img-products/Camino-de-mesa/cmesa4.webp",
              "/img-products/Camino-de-mesa/cmesa5.webp",              
    ],
  },
  trapoDePisoChico: {
    id: "trapoDePisoChico",
    title: "Trapo de Piso Chico",
    description:
      "Trapo de piso chico, duradero y absorbente, ideal para limpiezas rápidas y eficientes.",
    colors: "Blanco, Gris",
    size: "50cm x 50cm",
    imagen: [
      "/img-products/Elementos-de-limpieza/tpiso4.jpg",
      "/img-products/Elementos-de-limpieza/tpiso3.jpg",],
  },
  trapoDePisoGrande: {
    id: "trapoDePisoGrande",
    title: "Trapo de Piso Grande",
    description:
      "Trapo de piso grande, resistente y de excelente absorción, perfecto para superficies amplias.",
    colors: "Blanco, Gris",
    size: "50cm x 70cm / 60cm x 60cm",
    imagen: ["/img-products/Elementos-de-limpieza/tpiso3.jpg"],
  },
  trapoDePisoConsorcio: {
    id: "trapoDePisoConsorcio",
    title: "Trapo de Piso Consorcio",
    description:
      "Trapo de piso consorcio, extra absorbente y resistente, ideal para limpiezas intensivas.",
    colors: "Blanco, Gris",
    size: "60cm x 80cm",
    imagen: ["/img-products/Elementos-de-limpieza/tpiso3.jpg"],
  },
  rejilla: {
    id: "rejilla",
    title: "Rejilla",
    description:
      "Rejilla liviana y absorbente, perfecta para limpiar y secar superficies con facilidad.",
    colors: "Blanco, Gris",
    size: "35cm x 40cm",
    imagen: [
      "/img-products/Elementos-de-limpieza/rejilla3.jpg",
      "/img-products/Elementos-de-limpieza/rejilla1.webp"],
  },
  rejillaPesada: {
    id: "rejillaPesada",
    title: "Rejilla Pesada",
    description:
      "Rejilla pesada de doble pabilo, con máxima absorción y durabilidad para tareas exigentes.",
    colors: "Blanco, Gris",
    size: "35cm x 45cm",
    imagen: ["/img-products/Elementos-de-limpieza/rejilla2.webp"],
  },
};
