import GradientText from "../components/Text/GradientText";
import TrueFocus from "../components/Text/TrueFocus";
import { CheckCircle, Clock, BarChart3, BookOpenCheck, PlayCircle } from "lucide-react";
import { useState } from "react";
import { CheckCircle2, X, MessageCircle } from "lucide-react";
import SEO from "../components/SEO/SEO";

function AboutSection() {

   const [showForm, setShowForm] = useState(false);
   const [successPopup, setSuccessPopup] = useState(false);

   const aboutSchema = [
     {
       "@context": "https://schema.org",
       "@type": "AboutPage",
       "name": "About Insidious Bulls | Forex Trading Education & Mentorship",
       "description": "Know about Insidious Bulls, a trading academy helping traders learn forex, crypto, & commodity trading through practical education & real market insights.",
       "url": "https://insidiousbulls.com/about"
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
           "name": "About",
           "item": "https://insidiousbulls.com/about"
         }
       ]
     }
   ];

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  await fetch(
    "https://script.google.com/macros/s/AKfycbzIovcxAZNLS-yjcv3lqmM0auvG9EmPUQkfO7OU52QvP0iMPia2KOTo4dj603r3H5Wc0A/exec",
    {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }
  );

  form.reset();
  setShowForm(false);
  setSuccessPopup(true);
};

  return (

  <>
    <SEO
      title="About Insidious Bulls | Forex Trading Education & Mentorship"
      description="Know about Insidious Bulls, a trading academy helping traders learn forex, crypto, & commodity trading through practical education & real market insights."
      canonical="https://insidiousbulls.com/about"
      ogTitle="About Insidious Bulls | Forex Trading Education & Mentorship"
      ogDescription="Know about Insidious Bulls, a trading academy helping traders learn forex, crypto, & commodity trading through practical education & real market insights."
      ogUrl="https://insidiousbulls.com/about"
      schema={aboutSchema}
    />
    {/* Success Popup */}
   {successPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

    <div className="relative w-full max-w-lg">

      <div className="relative bg-[#0b1118] rounded-3xl px-10 py-12 text-center
                      border border-white/10
                      shadow-[0_25px_70px_rgba(0,0,0,0.7)]
                      animate-fadeIn">

        {/* Close Button Top Right */}
        <button
          onClick={() => setSuccessPopup(false)}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition"
        >
          <X size={18} />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
            <CheckCircle2 
              size={60} 
              className="relative text-emerald-400 drop-shadow-lg" 
            />
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
          Registration Successful
        </h3>

        {/* Subtitle */}
        <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto mb-8">
          You’ve successfully secured your demo seat.
          Join our private WhatsApp community for updates.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://chat.whatsapp.com/DC08kg4o1wVEmAHPIIPWmR"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3
                     w-full py-3
                     bg-gradient-to-r from-emerald-500 to-emerald-400
                     text-black font-semibold rounded-xl
                     hover:scale-[1.02]
                     transition duration-200 shadow-lg"
        >
          <MessageCircle size={18} />
          Join Community
        </a>

      </div>
    </div>
  </div>
)}
    <section className="w-full py-28 px-6 md:px-12 text-white relative overflow-hidden">

      {/* ===== Heading ===== */}
      <div className="text-center mb-20">

        <p className="text-emerald-400 tracking-widest text-sm mb-4">
          ABOUT THE COURSE
        </p>

        <GradientText
          colors={["#00ff99", "#ffffff", "#00ff99"]}
          animationSpeed={8}
          showBorder={false}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Complete Trading Education Program
        </GradientText>

        <h2 className="mt-6 text-xl sm:text-3xl md:text-5xl font-bold">

          Everything From{" "}
          <span className="inline-block">
            <TrueFocus
              sentence="Scratch To Advance"
              manualMode={false}
              blurAmount={5}
              borderColor="#ffffff"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </span>

        </h2>

        <p className="text-white/60 mt-6 max-w-3xl mx-auto text-sm sm:text-base">
          Learn by the experience of 6 years in live market.  
          Structured Stock Market, Forex Market & Cryptocurrency Education
          designed for serious learners who want clarity, discipline and execution.
        </p>

      </div>


      {/* ===== Main Glass Card ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 
                      border border-white/10 
                      rounded-3xl 
                      p-10 md:p-16 
                      bg-white/[0.03] backdrop-blur-xl
                      shadow-[0_0_40px_rgba(255,255,255,0.04)]">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Markets */}
          <div className="flex items-start gap-4">
            <BookOpenCheck className="text-emerald-400 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold">
                All Major Market Education Covered
              </h3>
              <p className="text-white/60 text-sm mt-2">
                Complete education in Stock Market, Forex Market
                and Cryptocurrency — all structured in one roadmap.
              </p>
            </div>
          </div>

          {/* Strategies */}
          <div className="flex items-start gap-4">
            <BarChart3 className="text-emerald-400 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold">
                10 Proven Strategies With Data Analysis
              </h3>
              <p className="text-white/60 text-sm mt-2">
                Strategy execution backed by data, price action
                and proper risk management framework.
              </p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-start gap-4">
            <Clock className="text-emerald-400 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold">
                120 Hours Power-Packed Knowledge
              </h3>
              <p className="text-white/60 text-sm mt-2">
                2 Months Live Classes + 1 Month Live Market Practice.
                Practice what you learn in real-time market.
              </p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="space-y-6">

          <div className="bg-white/[0.04] p-8 rounded-2xl border border-white/10">

            <ul className="space-y-5 text-sm text-white/80">

              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 mt-1" size={18} />
                Beginner Friendly – No Prior Knowledge Required
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 mt-1" size={18} />
                Live Market Based Practical Education
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 mt-1" size={18} />
                Capital Protection & Risk Management Focus
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 mt-1" size={18} />
                Trading Psychology & Discipline Training
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 mt-1" size={18} />
                All Classes Are Live After Demo Session
              </li>

            </ul>

          </div>

          {/* CTA */}
          <button 
          onClick={() => setShowForm(!showForm)}
          className="w-full group inline-flex justify-center items-center gap-3
                             px-8 py-4
                             border border-emerald-400/70
                             text-emerald-400
                             rounded-md
                             transition-all duration-200
                             hover:bg-emerald-400/10
                             hover:-translate-y-1">

            <PlayCircle size={20} />
            Register For Your Demo Session

          </button>

          {showForm && (
  <form
    onSubmit={handleSubmit}
    className="mt-6 bg-white/[0.04] p-6 rounded-2xl border border-white/10 space-y-4"
  >
    <input
      name="name"
      placeholder="Full Name"
      required
      className="w-full p-3 bg-black/30 rounded-lg border border-white/10 focus:outline-none"
    />
    <input
      name="email"
      type="email"
      placeholder="Email Address"
      required
      className="w-full p-3 bg-black/30 rounded-lg border border-white/10 focus:outline-none"
    />
    <input
      name="phone"
      placeholder="Phone Number"
      required
      className="w-full p-3 bg-black/30 rounded-lg border border-white/10 focus:outline-none"
    />
    <button
      type="submit"
      className="w-full bg-emerald-500 text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
    >
      Secure My Seat
    </button>
  </form>
)}

        </div>
        

      </div>

      {/* ===== Who Is This For ===== */}
<div className="max-w-5xl mx-auto mt-20 bg-white/[0.03] 
                border border-white/10 
                rounded-3xl p-10 backdrop-blur-xl">

  <h3 className="text-2xl font-semibold mb-8 text-center">
    Who Is This Trading Education For?
  </h3>

  <div className="grid md:grid-cols-2 gap-6 text-sm text-white/80">

    <div className="flex items-start gap-3">
      <CheckCircle className="text-emerald-400 mt-1" size={18} />
      Beginners who want proper structured education
    </div>

    <div className="flex items-start gap-3">
      <CheckCircle className="text-emerald-400 mt-1" size={18} />
      Traders stuck in losses due to no risk management
    </div>

    <div className="flex items-start gap-3">
      <CheckCircle className="text-emerald-400 mt-1" size={18} />
      People switching random strategies without clarity
    </div>

    <div className="flex items-start gap-3">
      <CheckCircle className="text-emerald-400 mt-1" size={18} />
      Serious learners who want live market execution
    </div>

  </div>
</div>

{/* ===== Learning Roadmap ===== */}
<div className="max-w-6xl mx-auto mt-24 text-center">

  <h3 className="text-3xl font-bold mb-12">
    3 Phase Learning Roadmap
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white/[0.04] p-8 rounded-2xl border border-white/10">
      <h4 className="font-semibold text-lg mb-4 text-emerald-400">
        Phase 1 – Foundation
      </h4>
      <p className="text-sm text-white/60">
        Market basics, structure, price action, 
        capital protection concepts from scratch.
      </p>
    </div>

    <div className="bg-white/[0.04] p-8 rounded-2xl border border-white/10">
      <h4 className="font-semibold text-lg mb-4 text-emerald-400">
        Phase 2 – Strategy Execution
      </h4>
      <p className="text-sm text-white/60">
        10 proven strategies with data analysis
        and proper risk management framework.
      </p>
    </div>

    <div className="bg-white/[0.04] p-8 rounded-2xl border border-white/10">
      <h4 className="font-semibold text-lg mb-4 text-emerald-400">
        Phase 3 – Live Practice
      </h4>
      <p className="text-sm text-white/60">
        1 Month live market practice with real
        execution examples and scenario training.
      </p>
    </div>

  </div>
</div>

    </section>
     </>
  );
}

export default AboutSection;