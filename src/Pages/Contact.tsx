import GradientText from "../components/Text/GradientText";
import { Mail, Phone, MessageCircle } from "lucide-react";
import SEO from "../components/SEO/SEO";

function Contact() {
  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us | Trading Course & Mentorship Enquiries",
      "description": "Contact us for trading course enquiries, mentorship details, partnerships, or support. Start your journey in forex, crypto, and commodity trading today.",
      "url": "https://insidiousbulls.com/contact"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://insidiousbulls.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://insidiousbulls.com/contact"
        }
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen px-6 md:px-12 py-28 text-white flex justify-center">
      <SEO
        title="Contact Us | Trading Course & Mentorship Enquiries"
        description="Contact us for trading course enquiries, mentorship details, partnerships, or support. Start your journey in forex, crypto, and commodity trading today."
        canonical="https://insidiousbulls.com/contact"
        ogTitle="Contact Us | Trading Course & Mentorship Enquiries"
        ogDescription="Contact us for trading course enquiries, mentorship details, partnerships, or support. Start your journey in forex, crypto, and commodity trading today."
        ogUrl="https://insidiousbulls.com/contact"
        schema={contactSchema}
      />

      <div className="max-w-4xl w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 tracking-widest text-sm mb-4">
            CONTACT US
          </p>

          <GradientText
            colors={["#00ff99", "#ffffff", "#00ff99"]}
            animationSpeed={8}
            showBorder={false}
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
          >
            Get In Touch
          </GradientText>

          <p className="text-white/60 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
            Have questions about the program?  
            Our team is here to assist you.
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/[0.04] backdrop-blur-xl
                        border border-white/10
                        rounded-3xl
                        p-10
                        shadow-[0_0_40px_rgba(255,255,255,0.04)]
                        space-y-10">

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <Mail className="text-emerald-400" size={26} />
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Email Address
              </p>
              <a
                href="mailto:Shubhsv777@gmail.com"
                className="text-white text-lg font-medium hover:text-emerald-400 transition"
              >
                Shubhsv777@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Phone className="text-blue-400" size={26} />
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Phone Number
              </p>
              <a
                href="tel:9131749509"
                className="text-white text-lg font-medium hover:text-blue-400 transition"
              >
                9131749509
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-xl">
              <MessageCircle className="text-green-400" size={26} />
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Quick Support
              </p>
              <a
                href="https://wa.me/919131749509"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium hover:text-green-400 transition"
              >
                Chat On WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;