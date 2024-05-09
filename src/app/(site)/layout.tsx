import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Header from "./components/header";
import SlideMenu from "./components/SlideMenu";
import { draftMode } from "next/headers";
import { FacebookPixelEvents } from "./components/pixel-events";
import { Suspense } from "react";
import Script from "next/script";

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
        <Script strategy="afterInteractive" id="close-menu">
          {`
            function closeMenu() {
                  var menu = document.getElementById("menu");
                  var glass = document.getElementById("glass");
                  var body = document.body;
                  if (menu && glass) {
                      menu.classList.remove("open");
                      glass.style.opacity = "0";

                      body.classList.remove("overflow-y-hidden");

                      setTimeout(function() {
                          glass.style.visibility = "hidden";
                      }, 500);
                  }
              }

              var button = document.getElementById("closeMenuButton");
              if (button) {
                  button.addEventListener("click", closeMenu);
              }
          `}
        </Script>
      </Suspense>
      <body
        className={`bg-white pb-[100vh] md:pb-[675px] ${moderat.variable} font-sans`}
      >
        <main>
          <div
            id="glass"
            className="invisible fixed left-0 top-0 z-[10] h-screen w-full bg-white bg-opacity-20 opacity-0 backdrop-blur-2xl transition duration-300"
          ></div>
          <Header />
          <SlideMenu />
          <div className="main-content relative z-[2] mb-5 bg-white shadow-md">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
