import AnimatedSection from "../../components/AnimatedSection";

export default function Impressum() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-12 text-gray-900">Impressum</h1>
          <div className="prose prose-lg text-gray-700 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Information in accordance with legal requirements:</h3>
              <p className="text-lg leading-relaxed">
                FactWeaver AI GmbH<br/>
                Innovation Drive 123<br/>
                10101 Tech City<br/>
                Germany
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Represented by:</h3>
              <p className="text-lg leading-relaxed">Jane Doe, CEO</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact:</h3>
              <p className="text-lg leading-relaxed">
                Phone: +49 (0) 123 44 55 66<br/>
                Email: legal@factweaverai.io
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Register Entry:</h3>
              <p className="text-lg leading-relaxed">
                Entry in the Handelsregister.<br/>
                Registering court: Amtsgericht Tech City<br/>
                Registration number: HRB 999999
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">VAT ID:</h3>
              <p className="text-lg leading-relaxed">
                Value Added Tax Identification Number according to Section 27a of the Value Added Tax Act:<br/>
                DE 999 999 999
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
