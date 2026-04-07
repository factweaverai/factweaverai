import AnimatedSection from "../../components/AnimatedSection";

export default function About() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-gray-900">About Us</h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-light">
            Truth-verification engine and knowledge synthesis. Ensuring truth in the age of synthetic information.
          </p>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="text-lg">
              Our organization is built on the foundation of open collaboration and a relentless pursuit of excellence. We believe that by working together, we can solve complex challenges and build infrastructure that stands the test of time.
            </p>
            <p className="text-lg">
              We are a diverse team of passionate engineers, designers, and visionaries dedicated to pushing the boundaries of what is possible. Through our open-source repositories, rigorous testing, and community-driven initiatives, we strive to make a lasting, positive impact on the technological landscape.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
