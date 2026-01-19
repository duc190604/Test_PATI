import type { Metadata } from "next";
import { Lora, Nunito, Montserrat, Trirong } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const trirong = Trirong({
  variable: "--font-trirong",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sculptique - Lymphatic Drainage & Cellulite Reduction",
  description: "Natural lymphatic drainage solution to reduce bloating, puffiness, and cellulite. Join over 93,000 satisfied customers.",
  icons: {
    icon: 'https://trysculptique.com/cdn/shop/files/fav.png?crop=center&height=32&v=1747491248&width=32',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${nunito.variable} ${montserrat.variable} ${trirong.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
