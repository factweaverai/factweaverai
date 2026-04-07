import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export const metadata: Metadata = {
  title: "FactWeaver AI",
  description: "Truth-verification engine and knowledge synthesis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#2563eb',
                  secondary: '#475569',
                }
              }
            }
          }
        `}}></script>
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
