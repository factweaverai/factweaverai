import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <AnimatedSection className="relative overflow-hidden flex items-center justify-center min-h-[80vh] bg-gray-900 text-white">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="FactWeaver AI Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
            FactWeaver AI
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-10 drop-shadow-md">
            Truth-verification engine and knowledge synthesis. Ensuring truth in the age of synthetic information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://github.com/factweaverai" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg">
              View on GitHub
            </Link>
            <Link href="/about" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24" delay={0.2}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Driving technological advancement in our sector through open-source collaboration and cutting-edge engineering.</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Community</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Building a robust, inclusive ecosystem of developers, users, and enthusiasts working towards shared goals.</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Sustainability</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Creating maintainable, scalable, and long-lasting software solutions designed for the future.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
