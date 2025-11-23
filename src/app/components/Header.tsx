export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 py-4">
      <nav className="flex justify-center gap-6 text-lm text-gray-600">
        <a href="#">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#about">Sobre Nosotros</a>
      </nav>
    </header>
  );
}
