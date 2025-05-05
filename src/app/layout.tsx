import type { Metadata } from "next";
import "./globals.css";
import {
  FONT_GALADA,
  FONT_INTER,
  FONT_SACRAMENTO,
  FONT_ANTONIO,
} from "@/utils/fonts";
import FooterSection from "@/sections/FooterSection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Magiczna Kuchnia Monika Kołucka - Catering | Łowicz i okolice",
  description: `Specjalizujemy się w kuchni polskiej, która jest dla nas inspiracją i
          pasją. Wykorzystujemy lokalne składniki, by podkreślić bogactwo smaków
          naszych regionów.`,
  robots: "index",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "https://magiczna-kuchnia.pl/img/og.png",
        width: 1200,
        height: 630,
        alt: "Caterging Magiczna Kuchnia - Monika Kołucka | Łowicz i okolice",
      },
    ],
    type: "website",
    locale: "pl_PL",
    title: "Caterging Magiczna Kuchnia - Monika Kołucka | Łowicz i okolice",
    description: "Klub badmintona, Nowa Wieś, Włocławek",
    url: "https:/magiczna-kuchnia.pl",
    siteName: "magiczna-kuchnia.pl",
  },
  twitter: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${FONT_GALADA.variable} ${FONT_INTER.variable} ${FONT_SACRAMENTO.variable} ${FONT_ANTONIO.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
