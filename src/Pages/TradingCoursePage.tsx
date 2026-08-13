import React from 'react';
import SEO from '../components/SEO/SEO';
import { ArrowRight, BookOpen, Target, TrendingUp, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TradingCoursePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Complete Trading Course by INSIDIOUS BULLS",
    "description": "Learn trading from scratch. Understand market mechanics, technical analysis, and build a risk management framework.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "INSIDIOUS BULLS",
      "sameAs": "https://insidiousbulls.com"
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-12 px-4 sm:px-6 overflow-x-hidden min-h-screen">
      <SEO
        title="Trading Course | Learn Trading Step by Step | INSIDIOUS BULLS"
        description="Master the financial markets with the complete trading course by INSIDIOUS BULLS. Learn trading strategies, technical analysis, and risk management."
        canonical="https://insidiousbulls.com/trading-course"
        schema={schema}
      />
      
      <div className="max-w-4xl w-full text-center mb-12 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
          The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Trading Course</span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          INSIDIOUS BULLS provides a structured trading education designed to take you from a complete beginner to a confident market participant. Learn how to trade without the noise.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-bold transition-all">
          Start Learning <ArrowRight size={20} />
        </Link>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <BookOpen className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">What is a Trading Course?</h2>
          <p className="text-white/70">
            A trading course is an educational program that teaches individuals how to analyze financial markets, execute trades, and manage risk. Our trading course at INSIDIOUS BULLS focuses on building a systematic framework for consistent decision-making in the markets.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Target className="text-emerald-400 mb-4" size={32} />
          <h2 className="text-xl font-bold text-white mb-2">Who is this for?</h2>
          <p className="text-white/70">
            This trading course is built for beginners looking for a structured path, as well as intermediate traders who want to refine their edge and eliminate emotional trading mistakes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum Overview</h2>
        <div className="space-y-4">
          <Link to="/forex-trading-course" className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><TrendingUp className="text-emerald-400" size={20}/> Module 1: Forex Trading Course</h3>
            <p className="text-white/60 text-sm">Understand currency pairs, market structure, and global macroeconomic drivers.</p>
          </Link>
          <Link to="/technical-analysis" className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Target className="text-emerald-400" size={20}/> Module 2: Technical Analysis</h3>
            <p className="text-white/60 text-sm">Master price action, support and resistance, and chart patterns to find high-probability setups.</p>
          </Link>
          <Link to="/risk-management" className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><ShieldAlert className="text-emerald-400" size={20}/> Module 3: Risk Management</h3>
            <p className="text-white/60 text-sm">Learn position sizing, stop-loss placement, and how to protect your trading capital.</p>
          </Link>
        </div>
      </div>
      
      <div className="max-w-3xl w-full text-left bg-emerald-950/20 border border-emerald-900/50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-4">Learn Trading with INSIDIOUS BULLS</h2>
        <p className="text-white/70 mb-4">
          Learning to trade takes time, discipline, and the right educational foundation. We don't promise overnight riches or "guaranteed profits." Instead, we provide realistic, actionable trading education focused on sustainable market participation.
        </p>
        <p className="text-white/70 mb-6">
          If you are ready to put in the work, explore our <Link to="/blog/complete-forex-trading-course-guide-2026" className="text-emerald-400 hover:underline">Complete Forex Trading Course Guide 2026</Link> or dive into our beginner resources.
        </p>
      </div>
    </section>
  );
}
