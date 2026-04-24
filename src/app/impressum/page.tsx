"use client";
import AnimatedSection from "../../components/AnimatedSection";
import { useTranslation } from "../../context/LanguageContext";

export default function Impressum() {
  const { t } = useTranslation();
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-12 text-white">Impressum</h1>
          <div className="prose prose-lg space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Information in accordance with legal requirements:</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                {t.contact.company}<br/>
                {t.contact.address_val}<br/>
                Germany
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Represented by:</h3>
              <p className="text-lg leading-relaxed text-gray-400">{t.contact.founder}, {t.contact.founder_label}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact:</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                Phone: {t.contact.phone_val}<br/>
                Email: {t.contact.email_val}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Register Entry:</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                Entry in the Handelsregister.<br/>
                Registering court: Amtsgericht Wildau<br/>
                Registration number: HRB 999999
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">VAT ID:</h3>
              <p className="text-lg leading-relaxed text-gray-400">
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
