import React from 'react';
import SEO from '../components/SEO/SEO';
import { ArrowRight, LineChart, CandlestickChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnicalAnalysisPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Technical Analysis for Trading | INSIDIOUS BULLS",
    "description": "Learn technical analysis to identify market trends, support/resistance, and chart patterns.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "INSIDIOUS BULLS",
      "sameAs": "https://insidiousbulls.com"
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-12 px-4 sm:px-6 overflow-x-hidden min-h-screen">
      <SEO
        title="Technical Analysis for Trading | INSIDIOUS BULLS"
        description="Master technical analysis with INSIDIOUS BULLS. Learn how to read price action, identify market structure, and find high-probability trading setups."
        canonical="https://insidiousbulls.com/technical-analysis"
        schema={schema}
      />
      
      <div className="max-w-4xl w-full text-center mb-12 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Analysis</span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          Learn how to read the markets. Technical analysis is the foundation of identifying high-probability trading opportunities using price data and chart patterns.
        </p>
        <Link to="/trading-course" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold transition-all">
          Explore Our Trading Courses <ArrowRight size={20} />
        </Link>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <LineChart className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">What is Technical Analysis?</h2>
          <p className="text-white/70">
            Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity, such as price movement and volume. At INSIDIOUS BULLS, we prioritize price action over lagging indicators.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <CandlestickChart className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">Key Concepts</h2>
          <p className="text-white/70">
            Our technical analysis education covers market structure (higher highs, lower lows), support and resistance zones, candlestick anatomy, supply and demand, and breakout/pullback trading strategies.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full text-left bg-emerald-950/20 border border-emerald-900/50 p-8 rounded-2xl mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Deep Dive: Price Action</h2>
        <p className="text-white/70 mb-4">
          Price action is the purest form of technical analysis. It involves making trading decisions based entirely on the raw price movement of an asset, rather than relying on mathematical indicators.
        </p>
        <Link to="/blog/mastering-price-action-trading" className="text-emerald-400 hover:underline flex items-center gap-2">
          <Activity size={16}/> Read Our Mastering Price Action Guide
        </Link>
      </div>
    </section>
  );
}
