import type { Metadata } from "next";
import { Noto_Serif, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nagelstudio by Sinja | Nagelstudio in Kerken",
  description:
    "Nagelstudio by Sinja in Kerken – professionelle Maniküre, Gel-Modellage, Nail Art und Fußpflege in entspannter Atmosphäre. Jetzt Termin buchen.",
  keywords: [
    "Nagelstudio Kerken",
    "Nagelstudio by Sinja",
    "Maniküre Kerken",
    "Fußpflege Kerken",
    "Nail Art Kerken",
    "Gel Modellage Kerken",
  ],
  openGraph: {
    title: "Nagelstudio by Sinja | Nagelstudio in Kerken",
    description:
      "Professionelle Nagel- und Fußpflege in entspannter Atmosphäre – mit viel Liebe zum Detail und höchsten Hygienestandards.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${notoSerif.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
