import React from 'react';
import SEO from '../components/SEO/SEO';
import { ArrowRight, Globe, Layers, BarChart3, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForexTradingCoursePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Forex Trading Course by INSIDIOUS BULLS",
    "description": "Learn forex trading from the ground up. Master currency pairs, market structure, and price action strategies.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "INSIDIOUS BULLS",
      "sameAs": "https://insidiousbulls.com"
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-12 px-4 sm:px-6 overflow-x-hidden min-h-screen">
      <SEO
        title="Forex Trading Course | Learn Forex Trading | INSIDIOUS BULLS"
        description="Master the global currency markets with the Forex Trading Course by INSIDIOUS BULLS. Learn about currency pairs, price action, and risk management."
        canonical="https://insidiousbulls.com/forex-trading-course"
        schema={schema}
      />
      
      <div className="max-w-4xl w-full text-center mb-12 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
          Forex <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Trading Course</span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          The definitive guide to understanding the foreign exchange market. Learn how to trade currency pairs with technical analysis and strict risk protocols.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold transition-all">
          Enroll Now <ArrowRight size={20} />
        </Link>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Globe className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">What is Forex Trading?</h2>
          <p className="text-white/70">
            Forex trading is the global market for exchanging national currencies against one another. It is the largest financial market in the world. Traders attempt to profit from changes in exchange rates driven by geopolitical and macroeconomic factors.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Layers className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">What You Will Learn</h2>
          <p className="text-white/70">
            Our forex trading course covers the mechanics of the FX market, how to read currency pairs, how leverage and margin work, and how to execute trades using institutional-grade market structure analysis.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full text-left bg-emerald-950/20 border border-emerald-900/50 p-8 rounded-2xl mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Forex Educational Resources</h2>
        <p className="text-white/70 mb-4">
          To build a solid foundation, check out our in-depth guides in the INSIDIOUS BULLS blog:
        </p>
        <ul className="space-y-3">
          <li>
            <Link to="/blog/complete-forex-trading-course-guide-2026" className="text-emerald-400 hover:underline flex items-center gap-2">
              <BookOpen size={16}/> Complete Forex Trading Course Guide 2026
            </Link>
          </li>
          <li>
            <Link to="/blog/forex-vs-crypto-trading" className="text-emerald-400 hover:underline flex items-center gap-2">
              <BarChart3 size={16}/> Forex vs Crypto Trading: Which is Better?
            </Link>
          </li>
          <li>
            <Link to="/blog/mastering-price-action-trading" className="text-emerald-400 hover:underline flex items-center gap-2">
              <Clock size={16}/> Mastering Price Action in Forex
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
