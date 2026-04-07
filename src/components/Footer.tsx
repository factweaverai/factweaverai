import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 className="font-extrabold text-2xl mb-6 text-gray-900">FactWeaver AI</h4>
          <p className="text-gray-600 text-lg leading-relaxed">
            Truth-verification engine and knowledge synthesis.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-gray-900">Links</h4>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6 text-gray-900">Legal</h4>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li><Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Data Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 border-t border-gray-200 text-center text-gray-500">
        &copy; {new Date().getFullYear()} FactWeaver AI. All rights reserved.
      </div>
    </footer>
  );
}
