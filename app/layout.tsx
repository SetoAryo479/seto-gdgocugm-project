import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/src/components/navbar/navbar";

const googleSansReguler = localFont({
  src: "../src/fonts/googlesans/google-sans-reguler.ttf",
  variable: "--font-google-sans-reguler",
});

const googleSansSemiBold = localFont({
  src: "../src/fonts/googlesans/google-sans-semibold.ttf",
  variable: "--font-google-sans-semibold",
});

const googleSansBold = localFont({
  src: "../src/fonts/googlesans/google-sans-bold.ttf",
  variable: "--font-google-sans-bold",
});


export const metadata: Metadata = {
  title: "Google Developer Groups on Campus Universitas Gadjah Mada",
  description: " ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${googleSansReguler.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
