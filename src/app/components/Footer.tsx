import { FaWhatsapp, FaFacebook, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 py-6">
      © {new Date().getFullYear()} LA CONQUISTA. Todos los derechos reservados.

      <div className="flex flex-col items-center mt-6">
        <p className="text-lm font-medium mb-1">Contáctanos:</p>

        <div className="flex gap-2 items-center">
          <a href="https://wa.me/3458430884" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.facebook.com/grupoasoc.la.conquista/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="mailto:laconquista265@gmail.com" aria-label="Enviar email">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/grupo_asociativo_la_conquista/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <div className="mt-5 text-sm">
        Desarrollado por <a href="https://www.instagram.com/horizonteweb26/" target="_blank" rel="noopener noreferrer"><span className="font-semibold">HORIZONTE WEB</span></a>
      </div>

    </footer>
  );
}
