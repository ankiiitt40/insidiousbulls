import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        
        {/* Brand Section */}
        <section className="flex flex-col gap-6 max-w-sm">
          <Link to="/" className="inline-block" aria-label="Insidious Bulls Home">
            <img 
              src="https://insidiousbulls.com/logo.png" 
              alt="Insidious Bulls Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-xl tracking-wide">INSIDIOUS BULLS</span>';
              }}
            />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Learn forex, crypto, and commodity trading! Explore expert-led trading education, market analysis, and practical strategies for global financial markets.
          </p>
          
          <div className="flex gap-4 items-center mt-2">
            <a 
              href="https://www.instagram.com/tradewith_shubham7?igsh=dDM0MDRsc2FjMWV0" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-emerald-400 transition-all hover:-translate-y-1"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubhamv7/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-emerald-400 transition-all hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </section>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:gap-24">
          {/* Explore */}
          <nav aria-label="Explore Links">
            <h3 className="text-white font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Explore</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2">
                  Blog / Insights
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <section aria-label="Contact Information">
            <h3 className="text-white font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="mailto:Shubhsv777@gmail.com"
                  className="group flex items-center gap-3 text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2"
                >
                  <Mail size={16} className="group-hover:text-emerald-400 transition-colors" />
                  <span>Email Support</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919131749509"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2"
                >
                  <MessageCircle size={16} className="group-hover:text-emerald-400 transition-colors" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919131749509"
                  className="group flex items-center gap-3 text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2"
                >
                  <Phone size={16} className="group-hover:text-emerald-400 transition-colors" />
                  <span>Call Us</span>
                </a>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center gap-3 text-white/50 hover:text-emerald-400 text-sm transition-colors focus-visible:outline-emerald-400 focus-visible:outline-offset-2">
                  <span className="ml-7">Contact Page</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Insidious Bulls. All rights reserved.
          </p>
          <span className="hidden md:inline text-white/20">•</span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-white/40 text-xs">
            <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <span className="cursor-not-allowed">Terms & Conditions</span>
            <span className="text-white/20">|</span>
            <span className="cursor-not-allowed">Risk Disclaimer</span>
            <span className="text-white/20">|</span>
            <span className="cursor-not-allowed">Refund Policy</span>
          </div>
        </div>
        <p className="text-white/40 text-[10px] md:text-xs max-w-lg text-center md:text-right leading-relaxed">
          Disclaimer: Trading involves significant risk of loss and is not suitable for everyone. 
          Information provided is for educational purposes only.
        </p>
      </div>
    </footer>
  );
}
