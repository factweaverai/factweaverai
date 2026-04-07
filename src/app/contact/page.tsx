import AnimatedSection from "../../components/AnimatedSection";
import { Mail, Code2, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-24 bg-gray-50 flex-1">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900">Contact Us</h1>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">We would love to hear from you. Whether you have a question about our projects, want to contribute, or just want to say hi, our team is ready to answer all your questions.</p>
          
          <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16 border border-gray-100">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Email</h3>
                  <p className="text-gray-500 text-lg mb-2">Our friendly team is here to help.</p>
                  <a href="mailto:hello@factweaverai.io" className="text-primary font-bold text-lg hover:underline">hello@factweaverai.io</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                  <Code2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">GitHub</h3>
                  <p className="text-gray-500 text-lg mb-2">Check out our repositories and contribute.</p>
                  <a href="https://github.com/factweaverai" className="text-primary font-bold text-lg hover:underline">github.com/factweaverai</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Office</h3>
                  <p className="text-gray-500 text-lg mb-2">Come say hello at our headquarters.</p>
                  <span className="text-gray-700 text-lg block leading-relaxed">123 Innovation Drive<br/>Tech City, TC 10101</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
