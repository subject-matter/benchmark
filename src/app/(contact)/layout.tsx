import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import Header from "../(site)/components/header";
import SlideMenu from "../(site)/components/SlideMenu";
import GoogleAnalytics from "../(site)/components/GoogleAnalytics";

const moderat = localFont({
  src: [
    {
      path: "../(site)/assets/fonts/Moderat-Regular.woff2",
      weight: "400",
    },
    {
      path: "../(site)/assets/fonts/Moderat-Regular.woff",
      weight: "400",
    },
    {
      path: "../(site)/assets/fonts/Moderat-Medium.woff2",
      weight: "500",
    },
    {
      path: "../(site)/assets/fonts/Moderat-Medium.woff",
      weight: "500",
    },
  ],
  variable: "--font-moderat",
});

export const metadata: Metadata = {
  title: "Benchmark Homes",
  description: "Design and build architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${moderat.variable} font-sans`}>
      <body className="bg-white">
      <GoogleAnalytics />

        <div
          id="glass"
          className="fixed top-0 left-0 bg-white bg-opacity-20 backdrop-blur-2xl h-screen w-full z-[10] transition duration-300 invisible opacity-0"
        ></div>
        <Header />
        <SlideMenu />

        <div className="bg-white main-content z-[2] relative ">{children}</div>
      </body>
    </html>
  );
}
