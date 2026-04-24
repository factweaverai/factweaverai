import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeContext";
import ThemeRegistry from "../components/ThemeRegistry";
import DecorativeBackground from "../components/DecorativeBackground";

export const metadata: Metadata = {
  title: "factweaver AI",
  description: "Weave facts into knowledge. Verify claims, trace provenance, and build trusted data fabrics that evolve with evidence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
                  secondary: '#FCD34D',
                }
              }
            }
          }
        `}}></script>
      </head>
      <body className="flex flex-col min-h-screen font-sans transition-colors duration-300" style={{ backgroundColor: '#0f0a00', color: '#fff8e1' }}>
        <ThemeRegistry>
          <LanguageProvider>
            <CustomThemeProvider>
              <DecorativeBackground />
              <Header />
              <main className="flex-1 relative z-10">{children}</main>
              <Footer />
              <CookieBanner />
            </CustomThemeProvider>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
