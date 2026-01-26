import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: "FactWeaver - The Active Fact-Checking Engine",
    template: `%s | FactWeaver`,
  },
  description: "Bridge the Narrative Gap between what public figures say and what the data proves. AI-powered investigative intelligence for journalists.",
  keywords: [
    'investigative journalism',
    'fact-checking',
    'GraphRAG',
    'document analysis',
    'leak investigation',
    'truth verification',
  ],
  authors: [{ name: 'FactWeaver' }],
  openGraph: {
    type: 'website',
    siteName: 'FactWeaver',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <CookieBanner />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
