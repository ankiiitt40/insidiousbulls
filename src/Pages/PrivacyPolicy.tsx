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
          
          <p>
            At Insidious Bulls, we respect your privacy and are committed to handling your personal information responsibly. This Privacy Policy explains how information may be collected, used, and protected when you visit <strong>insidiousbulls.com</strong> or contact us through the services and communication channels available on our website.
          </p>
          <p>
            By using our website, you acknowledge this Privacy Policy.
          </p>

          <h2>1. About Insidious Bulls</h2>
          <p>
            Insidious Bulls is a trading education platform focused on educational content relating to forex, crypto, commodities, market analysis, price action, and trading-related concepts.
          </p>
          <p>
            For privacy-related questions or requests, you can contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> +91 9131749509</li>
          </ul>

          <h2>2. Information You Provide</h2>
          <p>
            We may receive personal information that you voluntarily provide when you interact with our website or contact us. This may include:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>WhatsApp number</li>
            <li>Information included in course or mentorship enquiries</li>
            <li>Messages or other information you voluntarily submit to us</li>
          </ul>
          <p>
            We only use information that is reasonably necessary for the purpose for which you provide it.
          </p>

          <h2>3. Course Enquiry Form</h2>
          <p>
            Our website includes an enquiry form that allows visitors to contact Insidious Bulls regarding our educational offerings.
          </p>
          <p>
            Information submitted through this form may be transmitted to a Google Apps Script endpoint configured for the website. This means information submitted through the form may be processed using Google infrastructure and may also be subject to Google's applicable privacy practices and policies.
          </p>
          <p>
            We do not claim ownership or control over Google's infrastructure or third-party services.
          </p>
          <p>
            Please avoid submitting passwords, financial credentials, private keys, or other highly sensitive information through the enquiry form.
          </p>

          <h2>4. Email, Phone and WhatsApp Communications</h2>
          <p>
            If you contact us through email, telephone, WhatsApp, or another available communication channel, we may use the information you provide to:
          </p>
          <ul>
            <li>Respond to your enquiry</li>
            <li>Provide information about our courses or mentorship</li>
            <li>Answer questions about our educational services</li>
            <li>Provide requested information</li>
            <li>Communicate with you regarding your enquiry</li>
          </ul>
          <p>Our currently published contact details are:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> +91 9131749509</li>
          </ul>

          <h2>5. Information Collected Automatically</h2>
          <p>
            When you visit a website, certain technical information may potentially be recorded by the website's hosting or infrastructure providers. This may include information such as:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Requested pages</li>
            <li>Date and time of access</li>
            <li>Referring website</li>
            <li>Technical information required to operate and secure the website</li>
          </ul>
          <p>
            This information may be processed as part of normal hosting, security, and website infrastructure operations.
          </p>
          <p>
            The Insidious Bulls frontend does not intentionally implement third-party advertising or tracking analytics scripts such as Google Analytics, Meta Pixel, or Microsoft Clarity based on the current website implementation.
          </p>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            The current Insidious Bulls frontend does not intentionally set or use non-essential tracking or advertising cookies.
          </p>
          <p>
            The website also does not currently use frontend localStorage or sessionStorage for user tracking based on the current implementation.
          </p>
          <p>
            However, certain technically necessary technologies may potentially be used by hosting infrastructure, browsers, embedded third-party services, or external platforms linked from the website. The use of such third-party technologies is governed by the applicable provider's policies.
          </p>

          <h2>7. How We Use Information</h2>
          <p>
            Information provided to us may be used to:
          </p>
          <ul>
            <li>Respond to enquiries</li>
            <li>Provide information about courses and mentorship</li>
            <li>Communicate with users</li>
            <li>Improve our educational services</li>
            <li>Improve website functionality and user experience</li>
            <li>Maintain website security</li>
            <li>Prevent misuse or unauthorized activity</li>
            <li>Maintain appropriate business records</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>
            We do not intend to use personal information for purposes unrelated to the reason it was collected unless permitted or required by applicable law.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            Insidious Bulls may use or link to third-party services to support website functionality or communication.
          </p>
          <p>
            The current website may interact with or link to services including:
          </p>
          <ul>
            <li><strong>Google Apps Script</strong> — used for processing information submitted through the website enquiry form.</li>
            <li><strong>WhatsApp</strong> — available as a communication channel.</li>
            <li><strong>Instagram</strong> — linked social-media platform.</li>
            <li><strong>LinkedIn</strong> — linked social-media platform.</li>
          </ul>
          <p>
            When you interact with a third-party service, that service may independently collect or process information according to its own privacy policy and terms. We do not control the privacy practices of external platforms.
          </p>

          <h2>9. Payment Information</h2>
          <p>
            The current Insidious Bulls website does not have a payment processor integrated directly into its frontend codebase.
          </p>
          <p>
            Accordingly, this website does not currently claim to collect or store payment-card information such as:
          </p>
          <ul>
            <li>Credit/debit card numbers</li>
            <li>CVV numbers</li>
            <li>Banking passwords</li>
            <li>UPI credentials</li>
          </ul>
          <p>
            If payment functionality is introduced in the future, this Privacy Policy may be updated to explain the applicable payment-processing arrangements.
          </p>

          <h2>10. Sharing of Information</h2>
          <p>
            We do not intend to sell your personal information. Information may be shared where reasonably necessary with:
          </p>
          <ul>
            <li>Service providers supporting website functionality</li>
            <li>Third-party services used to process submitted information</li>
            <li>Communication platforms when you choose to contact us through them</li>
            <li>Government authorities where disclosure is required by applicable law</li>
            <li>Professional advisers or other parties where reasonably necessary to protect legal rights, security, or prevent fraud</li>
          </ul>
          <p>
            We aim to limit information sharing to what is reasonably necessary for the relevant purpose.
          </p>

          <h2>11. Data Retention</h2>
          <p>
            We may retain information for as long as reasonably necessary to:
          </p>
          <ul>
            <li>Respond to enquiries</li>
            <li>Provide requested services</li>
            <li>Maintain relevant business records</li>
            <li>Resolve disputes</li>
            <li>Protect our legitimate interests</li>
            <li>Meet applicable legal obligations</li>
          </ul>
          <p>
            The appropriate retention period may vary depending on the type and purpose of the information. When information is no longer reasonably required and there is no legal or legitimate reason to retain it, it may be deleted or otherwise disposed of appropriately.
          </p>

          <h2>12. Data Security</h2>
          <p>
            We take reasonable measures to protect information against unauthorized access, misuse, alteration, disclosure, or loss. However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.
          </p>
          <p>
            You should also take reasonable precautions when communicating online. For example, do not send:
          </p>
          <ul>
            <li>Passwords</li>
            <li>Private keys</li>
            <li>Seed phrases</li>
            <li>Banking credentials</li>
            <li>Authentication codes</li>
            <li>Other highly sensitive security information</li>
          </ul>
          <p>
            through ordinary email, WhatsApp, or website enquiry forms.
          </p>

          <h2>13. Your Privacy Requests</h2>
          <p>
            Depending on applicable law and the circumstances in which your information is processed, you may contact us to request information regarding personal data associated with your interaction with Insidious Bulls.
          </p>
          <p>
            Where applicable, requests may include:
          </p>
          <ul>
            <li>Requesting access to personal information</li>
            <li>Requesting correction of inaccurate information</li>
            <li>Requesting deletion where applicable</li>
            <li>Withdrawing consent where processing is based on consent</li>
            <li>Requesting that certain communications be stopped</li>
            <li>Raising a privacy-related concern</li>
          </ul>
          <p>
            To submit a privacy-related request, contact: <a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a>
          </p>
          <p>
            We may need to verify the identity of the requester before responding to certain requests. Applicable rights may vary depending on the nature and purpose of the processing and the law applicable to the request.
          </p>

          <h2>14. Children's Privacy</h2>
          <p>
            Our website provides educational information and trading-related educational resources. We do not knowingly seek to collect personal information from children in circumstances where such collection is prohibited by applicable law.
          </p>
          <p>
            If you believe that a child has provided personal information to Insidious Bulls inappropriately, please contact us at: <a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a>. We will review the concern and take appropriate action where required.
          </p>

          <h2>15. External Websites and Social Media</h2>
          <p>
            Our website may contain links to third-party websites and platforms, including social-media services. Examples include:
          </p>
          <ul>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Google services</li>
          </ul>
          <p>
            When you leave the Insidious Bulls website and interact with an external service, that service's own privacy policy and terms will apply. Insidious Bulls is not responsible for the privacy practices, security, or content of third-party websites.
          </p>

          <h2>16. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to:
          </p>
          <ul>
            <li>Our website</li>
            <li>Our services</li>
            <li>Data-processing practices</li>
            <li>Technology</li>
            <li>Third-party services</li>
            <li>Applicable legal or regulatory requirements</li>
          </ul>
          <p>
            When changes are made, the "Last Updated" date at the top of this page will be updated. We recommend reviewing this page periodically for the latest version.
          </p>

          <h2>17. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us.
          </p>
          
          <div className="mt-8 mb-8 p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4">
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
            <p className="text-sm text-white/50 m-0">Website: <Link to="/">insidiousbulls.com</Link></p>
          </div>

          <h2>18. Important Notice</h2>
          <p>
            This Privacy Policy describes the current privacy practices of the Insidious Bulls website based on its current technical implementation.
          </p>
          <p>
            As the website, services, forms, analytics, payment systems, or other technologies evolve, this Privacy Policy may also be updated.
          </p>
          <p>
            This document is intended as a general privacy-policy draft and should be reviewed against the business's actual operations and applicable legal requirements.
          </p>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
