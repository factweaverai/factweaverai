import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight">
          FactWeaver AI
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-600 hover:text-primary font-medium transition-colors">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary font-medium transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
