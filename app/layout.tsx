import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AsideCart from "@/components/AsideCart";
import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
import TanstackProvider from "@/providers/TanstackProvider";
import StoreProvider from "./StoreProvider";

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Frontend Challenge",
  description: "Desafio Frontend 01/05/2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>
        <StoreProvider>
          <TopMenu />
          <section className="main__container">
            <TanstackProvider>
              {children}
            </TanstackProvider>
            <AsideCart />
          </section>
        </StoreProvider>
        <Footer />
      </body>
    </html >
  );
}
