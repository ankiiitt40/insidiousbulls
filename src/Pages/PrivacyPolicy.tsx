import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MessageCircle } from 'lucide-react';
import GradientText from '../components/Text/GradientText';
import SEO from '../components/SEO/SEO';

const PrivacyPolicy: React.FC = () => {
  const privacySchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy | Insidious Bulls",
      "description": "Read the Insidious Bulls Privacy Policy to understand how we collect, use, and protect personal information when you use our website and services.",
      "url": "https://insidiousbulls.com/privacy-policy"
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
          "name": "Privacy Policy",
          "item": "https://insidiousbulls.com/privacy-policy"
        }
      ]
    }
  ];

  return (
    <section className="relative w-full flex flex-col items-center px-4 sm:px-6 py-24 overflow-x-hidden min-h-screen">
      <SEO
        title="Privacy Policy | Insidious Bulls"
        description="Read the Insidious Bulls Privacy Policy to understand how we collect, use, and protect personal information when you use our website and services."
        canonical="https://insidiousbulls.com/privacy-policy"
        ogTitle="Privacy Policy | Insidious Bulls"
        ogDescription="Read the Insidious Bulls Privacy Policy to understand how we collect, use, and protect personal information when you use our website and services."
        ogUrl="https://insidiousbulls.com/privacy-policy"
        schema={privacySchema}
      />

      <div className="w-full max-w-4xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] rounded-3xl p-6 sm:p-10 md:p-14">
        
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <Shield className="text-emerald-400 w-8 h-8" />
            <GradientText
              colors={["#00ff99", "#ffffff", "#00ff99"]}
              animationSpeed={8}
              showBorder={false}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Privacy Policy
            </GradientText>
          </div>
          <p className="text-white/60 text-sm sm:text-base font-medium">
            Last Updated: August 9, 2026
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none 
                        text-white/70 text-sm sm:text-base leading-relaxed
                        [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4
                        [&>p]:mb-6
                        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
                        [&_a]:text-emerald-400 [&_a]:hover:text-emerald-300 [&_a]:transition-colors">
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to Insidious Bulls ("we", "our", or "us"). We respect your privacy and aim to handle personal data responsibly and in accordance with applicable data protection laws. This Privacy Policy explains how we collect, use, and protect information when you visit and interact with our website located at <Link to="/">insidiousbulls.com</Link>.
          </p>

          <h2>2. Scope</h2>
          <p>
            This Privacy Policy applies strictly to information collected directly through the Insidious Bulls website. It does not apply to third-party platforms, social media networks, or external websites linked from our pages.
          </p>

          <h2>3. Information You Provide</h2>
          <p>
            We only collect personal information that you voluntarily choose to share with us through direct interactions. This includes:
          </p>
          <ul>
            <li><strong>About Page Enquiry Form:</strong> When you submit an enquiry through our form, we collect the details you provide (such as name, email, or phone number) to respond to your request.</li>
            <li><strong>Direct Communications:</strong> When you contact us directly via email, phone, or WhatsApp, we receive your contact details and the contents of your message.</li>
          </ul>

          <h2>4. Automatically Generated Server/Hosting Information</h2>
          <p>
            Like most websites, our web hosting provider and content delivery network (CDN) may automatically log standard technical information when you visit. This may include your IP address, browser type, device characteristics, operating system, and timestamp of your visit. This data is generally used by infrastructure providers for security, stability, and routing purposes, not for individual profiling.
          </p>

          <h2>5. How Information Is Used</h2>
          <p>
            We use the limited information you provide to:
          </p>
          <ul>
            <li>Respond to your course enquiries and mentorship questions.</li>
            <li>Provide customer support.</li>
            <li>Communicate updates regarding your specific requests.</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            The Insidious Bulls frontend does not intentionally set or use non-essential tracking cookies or advertising cookies (e.g., Google Analytics, Meta Pixel). However, our hosting provider, CDN, browser environments, or embedded third-party infrastructure may utilize technically necessary cookies or logs to ensure the website functions securely and correctly.
          </p>

          <h2>7. Google Apps Script / Third-Party Services</h2>
          <p>
            Our website utilizes minimal third-party integrations to function:
          </p>
          <ul>
            <li><strong>Enquiry Form (Google Apps Script):</strong> Information submitted through our contact form is transmitted to a configured Google Apps Script endpoint. This data is processed by Google's infrastructure and is subject to applicable Google privacy policies. We do not host or control Google's servers.</li>
          </ul>
          <p>
            <em>Note regarding payments:</em> At this time, the Insidious Bulls website does not integrate any native payment processors (e.g., Stripe, Razorpay) and we do not collect, process, or store credit card information on this website.
          </p>

          <h2>8. External Social Links</h2>
          <p>
            Our website contains links to external platforms like Instagram, LinkedIn, and WhatsApp. Clicking these links will direct you to third-party services that operate under their own independent privacy policies. We encourage you to review their policies before engaging with those platforms.
          </p>

          <h2>9. Data Sharing</h2>
          <p>
            We do not sell, rent, or lease your personal information to third parties for marketing purposes. Your information is only shared when necessary to facilitate the specific communication channels you have chosen to use (e.g., replying via your provided email or WhatsApp).
          </p>

          <h2>10. Data Retention</h2>
          <p>
            We retain the information you provide via communications or forms only for as long as reasonably necessary to fulfill the purpose of your enquiry, provide requested support, or as required for our legitimate business records.
          </p>

          <h2>11. Data Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your information against unauthorized access or disclosure. However, no internet transmission or electronic storage method can be guaranteed completely secure, and you share information at your own risk.
          </p>

          <h2>12. User Privacy Requests</h2>
          <p>
            Depending on your jurisdiction, you may have rights regarding your personal information, such as the right to request access, correction, or deletion of the data you have provided to us. If you wish to exercise these choices, please contact us using the information below.
          </p>

          <h2>13. Children's Privacy</h2>
          <p>
            Our website and trading education services are intended for a general adult audience. We do not knowingly collect personal information from individuals under the applicable legal age of consent in their jurisdiction.
          </p>

          <h2>14. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The "Last Updated" date at the top of this page indicates when the latest modifications were made.
          </p>

          <h2>15. Contact Information</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Insidious Bulls</h3>
            <a href="mailto:Shubhsv777@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors w-fit">
              <Mail size={18} />
              <span>Shubhsv777@gmail.com</span>
            </a>
            <a href="tel:+919131749509" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors w-fit">
              <Phone size={18} />
              <span>+91 9131749509</span>
            </a>
            <a href="https://wa.me/919131749509" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-emerald-400 transition-colors w-fit">
              <MessageCircle size={18} />
              <span>WhatsApp Support</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
