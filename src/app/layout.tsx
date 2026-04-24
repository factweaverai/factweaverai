import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "factweaver AI",
  description: "Knowledge graph construction with provenance tracking and fact verification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  primary: '#F59E0B',
                  secondary: '#dc2626',
                }
              }
            }
          }
        `}}></script>
      </head>
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
