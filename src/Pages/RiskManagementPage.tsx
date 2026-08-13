import React from 'react';
import SEO from '../components/SEO/SEO';
import { ArrowRight, ShieldCheck, AlertTriangle, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RiskManagementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Trading Risk Management | INSIDIOUS BULLS",
    "description": "Learn how to protect your trading capital with strict risk management rules, position sizing, and proper risk-to-reward ratios.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "INSIDIOUS BULLS",
      "sameAs": "https://insidiousbulls.com"
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-12 px-4 sm:px-6 overflow-x-hidden min-h-screen">
      <SEO
        title="Trading Risk Management | INSIDIOUS BULLS"
        description="Learn trading risk management with INSIDIOUS BULLS. Understand position sizing, the 1:2 risk-to-reward rule, and how to protect your trading capital."
        canonical="https://insidiousbulls.com/risk-management"
        schema={schema}
      />
      
      <div className="max-w-4xl w-full text-center mb-12 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
          Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Risk Management</span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          Risk management is the most important skill for any trader. Learn how to protect your capital and survive the markets long enough to become profitable.
        </p>
        <Link to="/trading-course" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold transition-all">
          Explore Our Trading Courses <ArrowRight size={20} />
        </Link>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <ShieldCheck className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">What is Risk Management in Trading?</h2>
          <p className="text-white/70">
            Risk management involves identifying, analyzing, and accepting or mitigating the uncertainty in trading decisions. It dictates how much capital you risk on a single trade, where you place your stop-loss, and how you manage an open position.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <AlertTriangle className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">Why It Matters</h2>
          <p className="text-white/70">
            Without risk management, a single losing streak can wipe out your entire trading account. With proper risk management, you can be wrong on 50% of your trades and still be highly profitable over the long term.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full text-left bg-emerald-950/20 border border-emerald-900/50 p-8 rounded-2xl mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Master the 1:2 Risk-to-Reward Rule</h2>
        <p className="text-white/70 mb-4">
          One of the fundamental concepts taught at INSIDIOUS BULLS is the 1:2 risk-to-reward ratio. This means for every unit of risk you take on a trade, your minimum target should be twice that amount.
        </p>
        <Link to="/blog/1-2-risk-reward-rule" className="text-emerald-400 hover:underline flex items-center gap-2">
          <Calculator size={16}/> Read Our 1:2 Risk-to-Reward Guide
        </Link>
      </div>
    </section>
  );
}
