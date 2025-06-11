import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import img from "../public/pattern.png";
import "./globals.css";
import { Toaster } from "sonner";

const mona_sans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An Ai powered platform for mock interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mona_sans.className} antialiased`}
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
