"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import BestProducts from "./components/BestProducts";
import Products from "./components/Products";
import About from "./components/about";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Header />
      <Hero />
      <BestProducts />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
