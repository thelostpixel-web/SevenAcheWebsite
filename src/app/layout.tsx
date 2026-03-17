import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-3RX60T7XS5"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-3RX60T7XS5');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
