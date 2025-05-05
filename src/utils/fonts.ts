import { Inter, Galada, Sacramento, Antonio } from "next/font/google";

export const FONT_ANTONIO = Antonio({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-antonio",
});

export const FONT_INTER = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-inter",
});

export const FONT_GALADA = Galada({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: "normal",
  variable: "--font-galada",
});

export const FONT_SACRAMENTO = Sacramento({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: "normal",
  variable: "--font-sacramento",
});
