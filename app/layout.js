import { Spectral, Cinzel, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Preheader from "@/components/Preheader";
import TopicBar from "@/components/TopicBar";
import Footer from "@/components/Footer";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata = {
  title: "African Hidden Voices",
  description: "A pan-African research institution retracing the IImboni, Kings and spiritual leaders whose wisdom colonialism tried to erase.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${cinzel.variable} ${hanken.variable}`}>
      <body className="min-h-full flex flex-col">
        <Preheader />
        <Nav />
        <TopicBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
