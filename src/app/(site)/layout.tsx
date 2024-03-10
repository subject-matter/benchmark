import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Header from "./components/header";
import SlideMenu from "./components/SlideMenu";


const moderat = localFont({
  src: [
    {
      path: './assets/fonts/Moderat-Regular.woff2',
      weight: '400',
    },
    {
      path: './assets/fonts/Moderat-Regular.woff',
      weight: '400',
    },
    {
      path: './assets/fonts/Moderat-Medium.woff2',
      weight: '500',
    },
    {
      path: './assets/fonts/Moderat-Medium.woff',
      weight: '500',
    },
  ],
  variable: '--font-moderat',
});

export const metadata: Metadata = {
  title: 'Benchmark Homes',
  description: 'Design and build architecture',
};

export const revalidate = 10; 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${moderat.variable} font-sans`}>
      <body className="bg-white pb-[100vh] md:pb-[675px] ">
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
      </body>
    </html>
  );
}
