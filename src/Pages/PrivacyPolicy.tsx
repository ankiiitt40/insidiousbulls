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
            Insidious Bulls ("Insidious Bulls", "we", "us", or "our") respects your privacy and is committed to handling personal information responsibly.
          </p>
          <p>
            This Privacy Policy explains how information may be collected, used, stored, and protected when you visit <strong>insidiousbulls.com</strong>, interact with our website, contact us, or use services and educational resources made available through the website.
          </p>
          <p>
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          <h2>1. Scope of This Privacy Policy</h2>
          <p>
            This Privacy Policy applies to information collected through the Insidious Bulls website and related interactions that are controlled by Insidious Bulls.
          </p>
          <p>
            It does not apply to third-party websites, platforms, payment providers, social-media services, or other external services that may be linked from our website. Those services operate under their own privacy policies and terms.
          </p>

          <h2>2. Information We May Collect</h2>
          <p>
            Depending on how you interact with the website, we may collect information that you voluntarily provide to us. This may include:
          </p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone or WhatsApp number</li>
            <li>Information included in enquiries or messages</li>
            <li>Information you provide when requesting information about courses, mentorship, or educational services</li>
            <li>Other information you voluntarily submit through forms or communications</li>
          </ul>
          <p>
            We only seek to collect information that is reasonably relevant to the purpose for which it is provided.
          </p>

          <h2>3. Information Collected Automatically</h2>
          <p>
            When you access a website, certain technical information may be processed automatically by the website, hosting infrastructure, browsers, or third-party services used by the website.
          </p>
          <p>
            Depending on the technical configuration of the website, this may include:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Approximate usage information</li>
            <li>Pages visited</li>
            <li>Referring pages</li>
            <li>Date and time of access</li>
            <li>Technical information required to maintain website functionality and security</li>
          </ul>
          <p>
            The exact information collected may vary depending on the services and technologies active on the website at a particular time.
          </p>

          <h2>4. How We Use Information</h2>
          <p>
            Information may be used for legitimate purposes including:
          </p>
          <ul>
            <li>Responding to enquiries</li>
            <li>Providing information about our educational offerings</li>
            <li>Communicating with users who contact us</li>
            <li>Providing requested services or resources</li>
            <li>Improving website functionality and user experience</li>
            <li>Understanding website usage and performance</li>
            <li>Maintaining website security</li>
            <li>Preventing misuse, fraud, or unauthorized activity</li>
            <li>Complying with applicable legal obligations</li>
            <li>Communicating important service-related information</li>
          </ul>
          <p>
            We do not intend to use personal information for purposes that are incompatible with the purpose for which it was collected, except where permitted or required by applicable law.
          </p>

          <h2>5. Contact and Communication</h2>
          <p>
            If you contact Insidious Bulls through email, telephone, WhatsApp, contact forms, or other available communication channels, we may use the information you provide to respond to your enquiry.
          </p>
          <p>
            Our currently published contact details include:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a></li>
            <li><strong>Phone / WhatsApp:</strong> +91 9131749509</li>
          </ul>
          <p>
            Please avoid sending sensitive personal, financial, authentication, or security information through ordinary email or messaging channels unless specifically requested through an appropriate secure process.
          </p>

          <h2>6. Courses, Mentorship and Educational Services</h2>
          <p>
            If you enquire about or use an Insidious Bulls course, mentorship program, or other educational service, additional information may be requested where reasonably necessary to provide or administer that service.
          </p>
          <p>
            The specific information collected will depend on the service and the method through which it is provided. Where a third-party platform is used to provide a particular service, that platform may separately process information according to its own privacy policy.
          </p>

          <h2>7. Payment Information</h2>
          <p>
            If payments for Insidious Bulls services are processed through a third-party payment provider, payment information may be processed directly by that provider.
          </p>
          <p>
            Insidious Bulls does not claim to store complete card numbers, CVV numbers, banking credentials, or other sensitive payment credentials unless the relevant payment architecture specifically requires and supports such processing.
          </p>
          <p>
            Users should review the privacy and security policies of the applicable payment provider before completing a transaction.
          </p>

          <h2>8. Cookies and Similar Technologies</h2>
          <p>
            Websites may use cookies, browser storage, or similar technologies for purposes such as:
          </p>
          <ul>
            <li>Maintaining website functionality</li>
            <li>Remembering preferences</li>
            <li>Understanding website usage</li>
            <li>Improving performance</li>
            <li>Supporting security</li>
          </ul>
          <p>
            The specific technologies used by Insidious Bulls may change as the website and its services evolve. Where required, applicable consent or preference mechanisms may be provided for non-essential technologies.
          </p>

          <h2>9. Analytics and Performance</h2>
          <p>
            Insidious Bulls may use analytics or performance technologies to understand how visitors interact with the website and to improve the website.
          </p>
          <p>
            Where third-party analytics services are used, those providers may process technical or usage information in accordance with their own privacy policies. Only analytics services actually implemented on the website should be considered covered by this section.
          </p>

          <h2>10. Third-Party Services</h2>
          <p>
            Our website may contain links, integrations, embeds, or functionality provided by third parties. These may include social-media platforms, communication services, analytics providers, payment providers, hosting providers, or other external services.
          </p>
          <p>
            Third-party services may collect or process information independently of Insidious Bulls. We encourage users to review the privacy policies and terms of any third-party service before using it.
          </p>

          <h2>11. Sharing of Information</h2>
          <p>
            We do not intend to sell your personal information. Information may be shared where reasonably necessary with:
          </p>
          <ul>
            <li>Service providers that help operate the website or deliver requested services</li>
            <li>Payment or transaction providers, where applicable</li>
            <li>Communication or technology providers</li>
            <li>Professional advisers where reasonably necessary</li>
            <li>Government authorities or law-enforcement bodies where required by applicable law</li>
            <li>Other parties where disclosure is legally required or reasonably necessary to protect rights, safety, security, or prevent fraud</li>
          </ul>
          <p>
            We aim to limit information sharing to what is reasonably necessary for the relevant purpose.
          </p>

          <h2>12. Data Retention</h2>
          <p>
            Personal information may be retained for as long as reasonably necessary to:
          </p>
          <ul>
            <li>Provide requested services</li>
            <li>Respond to enquiries</li>
            <li>Maintain business and transaction records</li>
            <li>Meet applicable legal or regulatory obligations</li>
            <li>Resolve disputes</li>
            <li>Protect legitimate business and security interests</li>
          </ul>
          <p>
            Retention periods may differ depending on the type and purpose of the information. Where information is no longer reasonably required and there is no legal or legitimate reason to retain it, appropriate deletion or disposal measures may be considered.
          </p>

          <h2>13. Data Security</h2>
          <p>
            We take reasonable measures to protect information against unauthorized access, misuse, alteration, disclosure, or loss. However, no internet transmission, electronic storage system, or online service can be guaranteed to be completely secure.
          </p>
          <p>
            Users should also take reasonable precautions, including using secure devices, protecting account credentials, and avoiding suspicious links or communications.
          </p>

          <h2>14. Your Choices and Privacy Rights</h2>
          <p>
            Depending on applicable law and the circumstances of processing, you may have rights or choices relating to your personal information. These may include:
          </p>
          <ul>
            <li>Requesting information about personal data held about you</li>
            <li>Requesting correction of inaccurate information</li>
            <li>Requesting deletion where applicable</li>
            <li>Withdrawing consent where processing is based on consent</li>
            <li>Requesting that certain communications be stopped</li>
            <li>Raising a privacy-related concern or complaint</li>
          </ul>
          <p>
            To make a privacy-related request, contact us at: <strong><a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a></strong>
          </p>
          <p>
            We may need to verify the identity of the requester before processing certain requests. Applicable rights may vary depending on the nature of the information, the purpose of processing, and applicable law.
          </p>

          <h2>15. Marketing Communications</h2>
          <p>
            If you voluntarily provide your contact information for receiving information about Insidious Bulls, courses, mentorship, educational resources, or related updates, we may use that information for the relevant communications.
          </p>
          <p>
            Where applicable, you may request that promotional communications be stopped. Service-related or legally required communications may continue where necessary.
          </p>

          <h2>16. Children's Privacy</h2>
          <p>
            Our website is intended to provide educational information and services to its intended audience. We do not knowingly seek to collect personal information from children in circumstances where such collection is prohibited by applicable law.
          </p>
          <p>
            If you believe that a child has provided personal information to us inappropriately, please contact us at <strong><a href="mailto:Shubhsv777@gmail.com">Shubhsv777@gmail.com</a></strong> so that the matter can be reviewed.
          </p>

          <h2>17. External Links</h2>
          <p>
            Our website may contain links to third-party websites, social-media platforms, educational resources, or other external services. We are not responsible for the privacy practices, security, content, or policies of third-party websites.
          </p>
          <p>
            We recommend reviewing the applicable privacy policy of any external service before providing personal information.
          </p>

          <h2>18. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to:
          </p>
          <ul>
            <li>Our website</li>
            <li>Our services</li>
            <li>Data-processing practices</li>
            <li>Technology</li>
            <li>Applicable legal or regulatory requirements</li>
          </ul>
          <p>
            When we make material changes, we may update the "Last Updated" date displayed at the top of this page. You should periodically review this page for the latest version.
          </p>

          <h2>19. Contact Us</h2>
          <p>
            If you have questions, concerns, requests, or complaints relating to this Privacy Policy or the handling of personal information, please contact:
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

          <h2>20. Important Notice</h2>
          <p>
            This Privacy Policy is intended to explain our general approach to privacy and personal information. It should be reviewed against the actual technical implementation, business structure, services, third-party providers, and applicable laws before being treated as a final legal document.
          </p>
          <p>
            For specific legal or regulatory requirements, Insidious Bulls should obtain appropriate professional legal advice.
          </p>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
