import AnimatedSection from "../../components/AnimatedSection";

export default function Privacy() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-12 text-gray-900">Data Privacy Policy</h1>
          <div className="prose prose-lg text-gray-700 space-y-10">
            <p className="text-lg text-gray-500 italic">Last updated: April 2026</p>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">1. An overview of data protection</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">General information</h3>
              <p className="text-lg leading-relaxed mb-6">
                The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term "personal data" comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data recording on this website</h3>
              <p className="text-lg font-bold text-gray-900 mb-2">Who is the responsible party for the recording of data on this website (i.e., the "controller")?</p>
              <p className="text-lg leading-relaxed mb-6">
                The data on this website is processed by the operator of the website, whose contact information is available under section "Information about the responsible party (referred to as the "controller" in the GDPR)" in this Privacy Policy.
              </p>
              
              <p className="text-lg font-bold text-gray-900 mb-2">How do we record your data?</p>
              <p className="text-lg leading-relaxed mb-6">
                We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form. Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Hosting and Content Delivery Networks (CDN)</h2>
              <p className="text-lg leading-relaxed">
                This website is hosted by GitHub Pages. The provider is GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">3. General information and mandatory information</h2>
              <p className="text-lg leading-relaxed">
                The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
