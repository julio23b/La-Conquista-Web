import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-8 py-10">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">LA CONQUISTA</h1>
          <p className="text-blue-600 font-semibold mt-2">
            FABRICA TEXTIL.
          </p>
          <p className="text-gray-600 mt-4 max-w-xl">
            Tu destino confiable para alfombras, trapos de piso, rejillas y caminos de mesa de alta calidad. Nos dedicamos a ofrecer productos duraderos y funcionales que realzan cualquier espacio. Ya sea que busques comodidad para tu hogar o soluciones prácticas para tu negocio, en LA CONQUISTA tenemos lo que necesitas.
          </p>

          <div className="flex gap-3 mt-6">
            <a href="#productos" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              Ver Productos
            </a>
            <a href="mailto:laconquista265@gmail.com" className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
              Contactanos
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://wa.me/3458430884"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Image
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                width={30}
                height={30}
              />
            </a>

            <a
              href="https://www.facebook.com/grupoasoc.la.conquista/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>

            <a
              href="mailto:laconquista265@gmail.com"
              className="transition hover:opacity-80"
            >
              <Image
                src="/icons/gmail.png"
                alt="Email"
                width={30}
                height={30}
              />
            </a>

            <a
              href="https://www.instagram.com/grupo_asociativo_la_conquista/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image src="/icons/icon.png" alt="logo-la-conquista" width={200} height={200} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
