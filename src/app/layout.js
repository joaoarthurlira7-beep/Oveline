import { Comfortaa, Poppins } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ovelin | A New Era Drops",
  description: "Ovelin — Moda fitness premium. Design exclusivo para potencializar seu movimento e transformar seu estilo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${comfortaa.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
