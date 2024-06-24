
import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Header from "./components/header";
import SlideMenu from "./components/SlideMenu";
import { draftMode } from "next/headers";
import { FacebookPixelEvents } from "./components/pixel-events";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Footerborder from "./components/footerborder";

const moderat = localFont({
  src: [
    {
      path: "./assets/fonts/Moderat-Regular.woff2",
      weight: "400",
    },
    {
      path: "./assets/fonts/Moderat-Regular.woff",
      weight: "400",
    },
    {
      path: "./assets/fonts/Moderat-Medium.woff2",
      weight: "500",
    },
    {
      path: "./assets/fonts/Moderat-Medium.woff",
      weight: "500",
    },
  ],
  variable: "--font-moderat",
});

export const metadata: Metadata = {
  title: "Benchmark Homes",
  description: "Design and build architecture",
};

export const revalidate = 10;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <Suspense>
        <FacebookPixelEvents />
      </Suspense>
      <body
        className={`bg-white  ${moderat.variable} font-sans`}
      >
        <main>
          <div
            id="glass"
            className="invisible fixed left-0 top-0 z-[10] h-screen w-full bg-white bg-opacity-20 opacity-0 backdrop-blur-2xl transition duration-300"
          ></div>
          <Header />
          <SlideMenu />
          <div className="main-content relative z-[2] mb-5 bg-white ">
            {children}
          <Footerborder/>


          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
