import React from 'react';
import SEO from '../components/SEO/SEO';
import { ArrowRight, Compass, GraduationCap, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TradingForBeginnersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Trading for Beginners | Learn Trading | INSIDIOUS BULLS",
    "description": "The ultimate starting point for new traders. Learn the basics of financial markets, how to avoid common mistakes, and how to build a trading plan.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "INSIDIOUS BULLS",
      "sameAs": "https://insidiousbulls.com"
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-12 px-4 sm:px-6 overflow-x-hidden min-h-screen">
      <SEO
        title="Trading for Beginners | Learn Trading | INSIDIOUS BULLS"
        description="The ultimate starting point for new traders. Learn the basics of financial markets, how to avoid common mistakes, and how to build a trading plan with INSIDIOUS BULLS."
        canonical="https://insidiousbulls.com/trading-for-beginners"
        schema={schema}
      />
      
      <div className="max-w-4xl w-full text-center mb-12 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
          Trading for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Beginners</span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          Welcome to the markets. Starting your trading journey can be overwhelming. We cut through the noise and provide a clear, structured path for absolute beginners.
        </p>
        <Link to="/trading-course" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold transition-all">
          View Beginner Courses <ArrowRight size={20} />
        </Link>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Compass className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">Where Should Beginners Start?</h2>
          <p className="text-white/70">
            Beginners should start by understanding what trading actually is—the buying and selling of financial assets (like forex, stocks, or crypto) to profit from price changes. Before risking any real capital, new traders must learn basic market structure and risk management.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <GraduationCap className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">How to Learn Trading</h2>
          <p className="text-white/70">
            The best way to learn trading is through a structured curriculum that combines theoretical knowledge with practical chart time. At INSIDIOUS BULLS, we recommend starting with our core foundational courses before moving to live execution.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full text-left bg-emerald-950/20 border border-emerald-900/50 p-8 rounded-2xl mb-16">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Map size={24} className="text-emerald-400"/> Your Learning Roadmap</h2>
        <ol className="space-y-4 text-white/70 list-decimal pl-5">
          <li><strong>Understand the Asset Class:</strong> Decide if you want to trade Forex, Crypto, or Commodities. Read our <Link to="/forex-trading-course" className="text-emerald-400 hover:underline">Forex Guide</Link>.</li>
          <li><strong>Learn Technical Analysis:</strong> Learn how to read candlestick charts and identify support/resistance. Explore <Link to="/technical-analysis" className="text-emerald-400 hover:underline">Technical Analysis</Link>.</li>
          <li><strong>Master Risk Management:</strong> Never risk more than 1-2% of your account on a single trade. Study <Link to="/risk-management" className="text-emerald-400 hover:underline">Risk Management</Link>.</li>
          <li><strong>Develop a Trading Plan:</strong> Write down your exact entry, exit, and risk criteria before taking any trades.</li>
        </ol>
      </div>
    </section>
  );
}
