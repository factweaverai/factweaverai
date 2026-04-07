import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FactWeaver AI - BMW Enthusiast Tools",
  description: "Software solutions for the BMW coding and diagnostics community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="layout-container">
          <header className="header">
            <div className="container">
              <div className="logo-text">FactWeaver AI</div>
            </div>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <div className="container">
              <p>&copy; {new Date().getFullYear()} FactWeaver AI. Built for the BMW community.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
