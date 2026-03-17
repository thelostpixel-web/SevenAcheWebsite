import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vcrFont = localFont({
  src: "./fonts/VCR_OSD_MONO_1.001.ttf",
  variable: "--font-vcr",
});

const sansReg = localFont({
  src: "./fonts/DMSans-Regular.ttf",
  variable: "--font-sans",
});

export const metadata = {
  title: "sevenache",
  description: "creative based in brighton, UK. working as a freelance graphic designer, creative consultant, art director, and everything in-between",
  favicon: "favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${vcrFont.variable} antialiased, ${sansReg.variable} antialiased`}


      >
        {children}
      </body>
    </html>
  );
}
