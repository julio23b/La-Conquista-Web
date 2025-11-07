import { FaWhatsapp, FaFacebook, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 py-6">
      © {new Date().getFullYear()} LA CONQUISTA. Todos los derechos reservados.

      <div className="mt-2 text-sm">
        Desarrollado por <a href="https://www.instagram.com/horizonteweb26/" target="_blank" rel="noopener noreferrer"><span className="font-semibold">HORIZONTE WEB</span></a>
      </div>

      <div className="flex gap-4 mt-6 justify-center align-center">
        <a href="https://wa.me/3458430884" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
        <a href="https://www.facebook.com/grupoasoc.la.conquista/" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
        <a href="mailto:laconquista265@gmail.com"><FaEnvelope size={24} /></a>
        <a href="https://www.instagram.com/grupo_asociativo_la_conquista/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
      </div>
    </footer>
  );
}
