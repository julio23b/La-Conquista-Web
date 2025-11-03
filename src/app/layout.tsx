import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LA CONQUISTA | Fábrica de Alfombras, Trapos de Piso, Rejillas y Caminos de Mesa",
  description: "Página web oficial de la fábrica de alfombras, trapos de piso, rejillas y caminos de mesa LA CONQUISTA.",
  metadataBase: new URL("https://la-conquista-web.vercel.app"),
  icons: {
    icon: [{ url: "/icons/icon.png", type: "image/png" }],
    shortcut: ["/icons/icon.png"],
    apple: ["/icons/icon.png"],
  },
  openGraph: {
    title: "LA CONQUISTA | Fábrica de Alfombras, Trapos de Piso, Rejillas y Caminos de Mesa",
    description: "Página web oficial de la fábrica de alfombras, trapos de piso, rejillas y caminos de mesa LA CONQUISTA.",
    url: "https://la-conquista-web.vercel.app",
    siteName: "LA CONQUISTA",
    images: [
      {
        url: "https://la-conquista-web.vercel.app/icons/icon.png",
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
    images: ["https://la-conquista-web.vercel.app/icons/icon.png"],
  },
  keywords: [
    "alfombras", "rejillas", "trapos de piso", "caminos de mesa", 
    "fábrica textil", "productos artesanales", "La Conquista"
  ],
  other: {
    "google-site-verification": "gHhB_MWI_eqo1f7g1cXfo_KfVkptyzM0maPIjUqMuDE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}

