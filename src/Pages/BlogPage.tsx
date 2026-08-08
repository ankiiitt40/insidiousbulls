import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "../data/blogData";
import SEO from "../components/SEO/SEO";
import GradientText from "../components/Text/GradientText";
import ImageWithFallback from "../components/ui/ImageWithFallback";

const CATEGORIES = ["All", "Forex", "Crypto", "Price Action", "Risk Management"] as const;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Schema for CollectionPage & BreadcrumbList
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trading Insights & Market Analysis | Insidious Bulls Blog",
    "description": "Read expert articles on forex, crypto, commodity trading, price action strategies, and risk management from Insidious Bulls.",
    "url": "https://insidiousbulls.com/blog",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Insidious Bulls",
      "url": "https://insidiousbulls.com",
      "logo": "https://insidiousbulls.com/logo.png"
    }
  };

  const breadcrumbSchema = {
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
        "name": "Blog",
        "item": "https://insidiousbulls.com/blog"
      }
    ]
  };

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-16 text-white max-w-7xl mx-auto">
      {/* SEO Component */}
      <SEO
        title="Trading Insights & Market Analysis | Insidious Bulls Blog"
        description="Read expert articles on forex, crypto, commodity trading, price action strategies, and risk management from Insidious Bulls."
        canonical="https://insidiousbulls.com/blog"
        ogTitle="Trading Insights & Market Analysis | Insidious Bulls Blog"
        ogDescription="Read expert articles on forex, crypto, commodity trading, price action strategies, and risk management from Insidious Bulls."
        ogUrl="https://insidiousbulls.com/blog"
        schema={[collectionSchema, breadcrumbSchema]}
      />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <p className="text-emerald-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
          INSIDIOUS BULLS KNOWLEDGE HUB
        </p>

        <GradientText
          colors={["#00ff99", "#ffffff", "#00ff99"]}
          animationSpeed={8}
          showBorder={false}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Market Insights & Trading Guides
        </GradientText>

        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Master price action, forex market dynamics, crypto strategies, and strict risk control through transparent, educational guides.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto pt-4">
          <Search className="absolute left-4 top-7 text-white/40" size={20} />
          <input
            type="text"
            placeholder="Search strategies, forex, risk management..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col hover:border-emerald-500/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <ImageWithFallback
                  src={post.featuredImage}
                  alt={post.title}
                  category={post.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-500/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm z-10">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-emerald-400" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-white/60 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40 flex items-center gap-1">
                    <Tag size={12} className="text-emerald-400" />
                    {post.tags && post.tags.length > 0 ? post.tags[0] : post.category}
                  </span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
          <BookOpen size={48} className="mx-auto text-white/30 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            We couldn't find any trading articles matching "{searchQuery}". Try clearing your search or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-6 px-6 py-2 bg-emerald-500 text-black font-semibold rounded-full text-xs hover:bg-emerald-400 transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
