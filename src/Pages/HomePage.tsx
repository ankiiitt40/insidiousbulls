import GradientText from '../components/Text/GradientText'
import TrueFocus from '../components/Text/TrueFocus'
import CountUp from '../components/Text/CountUp'
import DecryptedText from '../components/Text/DecryptedText';
import { Globe, Users } from "lucide-react"
import { ArrowRight } from "lucide-react";
import RotatingText from "../components/ui/RotatingText";
import ReviewCard from "../components/ui/ReviewCard";
import { reviews } from "../components/data/reviews";
import ScrollVelocity from '../components/ui/ScrollVelocity';
import { CheckCircle, XCircle, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart3, TrendingUp, BookOpenCheck, Clock } from "lucide-react";

import TradingChart from '../components/home/TradingChart';
import FAQ from '../components/home/FAQ';
import SEO from '../components/SEO/SEO';

import ibullsVideo from '../assets/ibulls.mp4';

const firstRowReviews = reviews.slice(0, 10);
const secondRowReviews = reviews.slice(10, 20);

function HomePage() {
  const navigate = useNavigate();

  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Insidious Bulls",
      "url": "https://insidiousbulls.com/",
      "logo": "https://insidiousbulls.com/logo.png",
      "description": "Learn forex, crypto, and commodity trading! Explore expert-led trading education, market analysis, and practical strategies for global financial markets.",
      "sameAs": [
        "https://www.instagram.com/tradewith_shubham7",
        "https://www.linkedin.com/in/shubhamv7/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Insidious Bulls",
      "url": "https://insidiousbulls.com/"
    }
  ];

  return (
    <section className="relative w-full flex flex-col items-center text-center px-5 py-24 overflow-x-hidden">
      <SEO
        title="Insidious Bulls | Learn Forex, Crypto & Commodity Trading"
        description="Learn forex, crypto, and commodity trading! Explore expert-led trading education, market analysis, and practical strategies for global financial markets."
        canonical="https://insidiousbulls.com/"
        ogTitle="Insidious Bulls | Learn Forex, Crypto & Commodity Trading"
        ogDescription="Learn forex, crypto, and commodity trading! Explore expert-led trading education, market analysis, and practical strategies for global financial markets."
        ogUrl="https://insidiousbulls.com/"
        schema={homeSchema}
      />

       <div className="flex flex-col items-center gap-10">

        {/* Main Heading */}
        <GradientText
          colors={["#00C853", "#e0e8e4", "#69F0AE", "#116835"]}
          animationSpeed={8}
          showBorder={false}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight"
        >
          Trade Smarter. Grow Faster.
        </GradientText>

        {/* Trading Chart Hook */}
        <div className="w-full max-w-lg -mt-6">
          <TradingChart />
        </div>

        {/* Rest of the UI */}

        {/* Second Line */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-lg sm:text-2xl md:text-3xl font-semibold">

          {/* Simple Learning */}
          <GradientText
            colors={["#dde3ed", "#d9dfe7", "#edf0f5"]}
            animationSpeed={10}
            showBorder={false}
            className="mb-4 sm:mb-0 sm:mr-6"
          >
            Simple Learning
          </GradientText>

          {/* Real Market + Clarity Group */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">

            <div className="text-white">
              <TrueFocus
                sentence="Real Market"
                manualMode={false}
                blurAmount={5}
                borderColor="#ffffff"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </div>

            <span className="text-gray-200 font-semibold">
              Clarity.
            </span>

          </div>

        </div>

        {/* Third Line */}
        <GradientText
          colors={["#d6dde8", "#dcdfe3", "#dbe2ee"]}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-lg md:text-xl font-medium"
        >
          Beginner-Friendly Trading Education.
        </GradientText>

      </div>


      <div className="text-center px-4">

  <div className="flex justify-center items-baseline gap-2 
                  text-sm sm:text-lg md:text-2xl lg:text-3xl 
                  font-semibold whitespace-nowrap">

    {/* 1000+ CountUp */}
    <span className="bg-gradient-to-r 
                     from-[#38BDF8] via-[#22D3EE] to-[#2DD4BF] 
                     bg-clip-text text-transparent font-bold">

      <CountUp
        from={0}
        to={1000}
        separator=","
        direction="up"
        duration={0.8}
        startWhen={true}
      />
      +
    </span>

    {/* Rest Text */}
    <GradientText
      colors={["#ffffff", "#d1d5db", "#ffffff"]}
      animationSpeed={12}
      showBorder={false}
    >
      Students Learning in Our Mastery Program
    </GradientText>

  </div>

</div>


{/* Bottom Info Section */}
{/* Bottom Info Section */}
<div className="w-full mt-20 flex justify-center px-4">


  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">

    {/* Languages Card */}
    <div className="flex items-center gap-4 
                    bg-white/5 backdrop-blur-lg 
                    border border-white/10 
                    rounded-xl px-6 py-4
                    w-full sm:w-auto
                    shadow-md shadow-black/20">

      <Globe className="w-5 h-5 text-emerald-400 flex-shrink-0" />

      <div className="text-left">
        <p className="text-[12px] text-gray-400 uppercase tracking-wider">
          Languages
        </p>

        <DecryptedText
          text="Hindi, Urdu & English"
          animateOn="view"
          sequential
          speed={90}
          maxIterations={25}
          className="text-white text-sm font-medium"
        />
      </div>
    </div>

    {/* Limited Seats Card */}
    <div className="flex items-center gap-4 
                    bg-white/5 backdrop-blur-lg 
                    border border-white/10 
                    rounded-xl px-6 py-4
                    w-full sm:w-auto
                    shadow-md shadow-black/20">

      <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />

      <div className="text-left">
        <p className="text-[12px] text-gray-400 uppercase tracking-wider">
          Availability
        </p>

        <DecryptedText
          text="Limited Seats"
          animateOn="view"
          sequential
          speed={90}
          maxIterations={25}
          className="text-white text-sm font-medium"
        />
      </div>
    </div>

  </div>
</div>

 

{/* CTA Button Section */}
<div className="w-full mt-16 flex justify-center px-4">
  <button
    onClick={() => navigate("/about")}
    className="
      group inline-flex items-center gap-3
      px-8 py-3
      border border-white/70
      text-white
      bg-transparent
      rounded-md
      
      transition-all duration-200 ease-out
      
      hover:bg-white/10
      hover:border-white
      hover:-translate-y-0.5
      
      active:translate-y-0
      active:scale-95
      
      focus:outline-none focus:ring-2 focus:ring-white/30
    "
  >
    <span className="font-semibold tracking-wide">
      Start Journey
    </span>

    <ArrowRight
      size={18}
      className="
        transition-transform duration-200 
        group-hover:translate-x-1
      "
    />
  </button>
</div>

{/* Premium Video Section */}
<section className="w-full flex justify-center px-4 mt-24">
  <div className="relative w-full max-w-[1000px] rounded-3xl overflow-hidden
                  bg-white/[0.02] backdrop-blur-xl
                  border border-white/10
                  shadow-[0_0_40px_rgba(255,255,255,0.03)]
                  group">
                  
    {/* Subtle Premium Glow behind the video */}
    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-blue-500/5 opacity-50"></div>
    
    <div className="relative z-10 w-full rounded-3xl overflow-hidden">
      <video
        src={ibullsVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.01]"
        aria-label="Insidious Bulls trading overview video"
      />
    </div>
  </div>
</section>

<div className="relative w-full max-w-6xl mt-24 mx-auto px-10 py-14
                rounded-3xl
                bg-transparent
                border border-white/10
                shadow-[0_0_40px_rgba(255,255,255,0.05)]
                grid grid-cols-1 md:grid-cols-2 gap-10
                before:absolute before:inset-0 before:rounded-3xl
                before:border before:border-white/20
                before:opacity-30
                before:animate-pulse
                before:pointer-events-none">



  {/* ===== HEADING (TOP FULL WIDTH) ===== */}
  <div className="col-span-1 md:col-span-2 text-center mb-6">
    <h2 className="text-white font-bold 
                   text-xl sm:text-2xl md:text-4xl lg:text-5xl 
                   leading-tight">

      How Our Course Will Transform Your{" "}

      <span className="inline-block align-baseline">
        <TrueFocus
          sentence="Trading Journey"
          manualMode={false}
          blurAmount={5}
          borderColor="#ffffff"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </span>

      
    </h2>
  </div>


  {/* CARD 1 */}
  <div className="group relative p-8 rounded-3xl
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  border border-white/10
                  shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]
                  transition-all duration-300
                  hover:border-white/30
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                  hover:-translate-y-2">

    <div className="p-3 bg-white/10 rounded-xl w-fit mb-5
                    transition-all duration-300
                    group-hover:bg-white/20">
      <TrendingUp size={28} className="text-white/80" />
    </div>

    <h3 className="text-xl font-semibold text-white mb-4">
      Practical, Real-World Strategies
    </h3>

    <p className="text-sm text-white/60 leading-relaxed">
      Learn real execution models used in live markets —
      structured systems, risk control and decision clarity
      beyond textbook theory.
    </p>
  </div>


  {/* CARD 2 */}
  <div className="group relative p-8 rounded-3xl
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  border border-white/10
                  shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]
                  transition-all duration-300
                  hover:border-white/30
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                  hover:-translate-y-2">

    <div className="p-3 bg-white/10 rounded-xl w-fit mb-5
                    transition-all duration-300
                    group-hover:bg-white/20">
      <BookOpenCheck size={28} className="text-white/80" />
    </div>

    <h3 className="text-xl font-semibold text-white mb-4">
      Beginner to Pro – Step-by-Step Roadmap
    </h3>

    <p className="text-sm text-white/60 leading-relaxed">
      Follow a structured progression designed to build
      fundamentals, discipline and confidence —
      from basics to advanced execution.
    </p>
  </div>


  {/* CARD 3 */}
  <div className="group relative p-8 rounded-3xl
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  border border-white/10
                  shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]
                  transition-all duration-300
                  hover:border-white/30
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                  hover:-translate-y-2">

    <div className="p-3 bg-white/10 rounded-xl w-fit mb-5
                    transition-all duration-300
                    group-hover:bg-white/20">
      <BarChart3 size={28} className="text-white/80" />
    </div>

    <h3 className="text-xl font-semibold text-white mb-4">
      Real Chart-Based Deep Learning
    </h3>

    <p className="text-sm text-white/60 leading-relaxed">
      Analyze price action, market behavior and high-probability
      setups to truly understand why trades work —
      not just when to enter.
    </p>
  </div>


  {/* CARD 4 */}
  <div className="group relative p-8 rounded-3xl
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  border border-white/10
                  shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]
                  transition-all duration-300
                  hover:border-white/30
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                  hover:-translate-y-2">

    <div className="p-3 bg-white/10 rounded-xl w-fit mb-5
                    transition-all duration-300
                    group-hover:bg-white/20">
      <Clock size={28} className="text-white/80" />
    </div>

    <h3 className="text-xl font-semibold text-white mb-4">
      Live Market Case Studies
    </h3>

    <p className="text-sm text-white/60 leading-relaxed">
      Study real-time breakdowns and scenario-based analysis
      to sharpen clarity, speed and confident execution.
    </p>
  </div>

</div>
<div className="w-full px-6 md:px-12 lg:px-20 mt-16 md:mt-24 lg:mt-32 flex justify-center text-center">
  <h1 className="flex flex-wrap justify-center items-center gap-2 
                 text-3xl sm:text-4xl md:text-6xl 
                 font-bold text-white leading-snug md:leading-tight">
    
    <span>Transforming Beginners Into</span>

    <RotatingText
      texts={["Disciplined", "Strategy-Driven"]}
      mainClassName="text-cyan-400 font-semibold"
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2500}
    />

    <span>Traders.</span>

  </h1>
</div>
<div className="py-20 space-y-12 overflow-hidden">

  {/* Row 1 → Right */}
  <ScrollVelocity velocity={60}>
    <div className="flex gap-8 w-max">
      {firstRowReviews.map((review, index) => (
        <ReviewCard key={`row1-${index}`} {...review} />
      ))}
    </div>
  </ScrollVelocity>

  {/* Row 2 → Left */}
  <ScrollVelocity velocity={-60}>
    <div className="flex gap-8 w-max">
      {secondRowReviews.map((review, index) => (
        <ReviewCard key={`row2-${index}`} {...review} />
      ))}
    </div>
  </ScrollVelocity>

</div>

<div className="w-full py-24 px-6 md:px-12 text-white">

  {/* Heading */}
  <div className="text-center mb-16">
    <p className="text-orange-500 tracking-widest text-sm mb-4">
      COMPARISON
    </p>
<h2
  className="
    text-center
    text-xl
    sm:text-2xl
    md:text-5xl
    lg:text-6xl
    font-bold
    leading-snug
    md:leading-tight
    text-white
    max-w-5xl
    mx-auto
  " 
>

  {/* Line 1 */}
  <span className="block md:inline">
    What Sets{" "}
  </span>

  {/* Rotating Text */}
  <span className="block md:inline my-2 md:my-0">
    <span className="relative inline-flex items-center justify-center overflow-hidden min-h-[1.3em] mx-2">
      <RotatingText
       texts={[
  "INSIDIOUS BULLS",
  "ELITE EXECUTION",
  "MARKET DOMINANCE"
]}

        mainClassName="text-green-400 font-bold whitespace-nowrap"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.02}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
        rotationInterval={3000}
      />
    </span>
  </span>

  {/* Line 2 */}
  <span className="block">
    Apart From Other Trading Platforms
  </span>

</h2>



  </div>

  {/* Cards Wrapper */}
  <div className="max-w-6xl mx-auto 
                  border border-white/10 
                  rounded-3xl 
                  p-4 sm:p-8 md:p-12 
                  grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12
                  bg-black/40">

    {/* INSIDIOUS BULLS SIDE */}
    <div className="border border-green-500/40 
                    rounded-2xl 
                    p-5 sm:p-8 
                    shadow-[0_0_40px_rgba(0,255,0,0.15)]
                    bg-white/[0.03]">

      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Layers className="text-green-400" />
        <h3 className="text-xl sm:text-2xl font-semibold">
          INSIDIOUS BULLS
        </h3>
      </div>

      <ul className="space-y-4 sm:space-y-6">

        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">Capital Protection Focused Strategies</span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">Live Market Based Practical Learning</span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">Data-Driven & Price Action Methodology</span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">Real-Time Trade Execution Examples</span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">Strict Risk Management Framework</span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">Performance Tracking & Psychology Training</span>
        </li>

      </ul>
    </div>

    {/* OTHERS SIDE */}
    <div className="border border-white/10 
                    rounded-2xl 
                    p-5 sm:p-8 
                    bg-white/[0.02]">

      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Layers className="text-white/60" />
        <h3 className="text-xl sm:text-2xl font-semibold text-white/80">
          Others
        </h3>
      </div>

      <ul className="space-y-4 sm:space-y-6">

        <li className="flex items-start gap-3">
          <XCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base text-white/70">Indicator Overload Without Clear Edge</span>
        </li>

        <li className="flex items-start gap-3">
          <XCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base text-white/70">Theory-Heavy, Little Practical Exposure</span>
        </li>

        <li className="flex items-start gap-3">
          <XCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base text-white/70">No Structured Risk Management</span>
        </li>

        <li className="flex items-start gap-3">
          <XCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base text-white/70">Random Strategy Hopping</span>
        </li>

        <li className="flex items-start gap-3">
          <XCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base text-white/70">No Trading Psychology Guidance</span>
        </li>

        <li className="flex items-start gap-3">
          <XCircle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base text-white/70">Certificate-Based Learning Without Real Skill</span>
        </li>

      </ul>
    </div>

  </div>
</div>


<FAQ />
    </section>
  )
}

export default HomePage
