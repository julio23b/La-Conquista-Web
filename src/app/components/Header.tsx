export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 py-4">
      <nav className="flex justify-end gap-6 text-lm text-gray-600">
        <a href="#">Inicio</a>
        <a href="#bestproducts">Mas vendidos</a>
        <a href="#productos">Productos</a>
      </nav>
    </header>
  );
}
