import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LA CONQUISTA | Fabrica De Alfombras, Trapos de Piso, Rejillas, Caminos de Mesa",
  description: "Pagina web oficial de la fabrica de alfombras, trapos de piso, rejillas, caminos de mesa LA CONQUISTA",
  icons: {
    icon: "/icons/icon.png",
  },
  metadataBase: new URL("https://la-conquista-web.vercel.app/"),
  openGraph: {
    title: "LA CONQUISTA | Fabrica De Alfombras, Trapos de Piso, Rejillas, Caminos de Mesa",
    description: "Pagina web oficial de la fabrica de alfombras, trapos de piso, rejillas, caminos de mesa LA CONQUISTA",
    url: "https://la-conquista-web.vercel.app/",
    siteName: "LA CONQUISTA",
    images: [
      {
        url: "/icons/icon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "LA CONQUISTA | Fábrica de Alfombras y Textiles",
  description: "Fábrica de alfombras, trapos de piso, rejillas y caminos de mesa.",
  images: ["/icons/icon.png"],
  },
  keywords: [
  "alfombras", "rejillas", "trapos de piso", "caminos de mesa", 
  "fábrica textil", "productos artesanales", "La Conquista"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
