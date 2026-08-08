import { useParams, Link, useNavigate } from "react";
import { BLOG_POSTS } from "../data/blogData";
import SEO from "../components/SEO/SEO";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, CheckCircle2, BookOpen, ExternalLink, HelpCircle, AlertCircle, RefreshCw } from "lucide-react";
import GradientText from "../components/Text/GradientText";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 text-white">
        <AlertCircle size={56} className="text-emerald-400 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Article Not Found</h1>
        <p className="text-white/60 mb-6 max-w-md">
          The article you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all text-sm"
        >
          <ArrowLeft size={16} /> Return to Blog
        </Link>
      </div>
    );
  }

  // Related Posts lookup
  const relatedArticles = BLOG_POSTS.filter((p) => post.relatedPosts?.includes(p.slug));

  // 1. Article / BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": [post.featuredImage],
    "datePublished": post.publishedDate,
    "dateModified": post.updatedDate || post.publishedDate,
    "author": {
      "@type": "Person",
      "name": post.author,
      "description": post.authorBio,
      "url": "https://insidiousbulls.com/about"
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Insidious Bulls",
      "url": "https://insidiousbulls.com",
      "logo": "https://insidiousbulls.com/logo.png"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://insidiousbulls.com/blog/${post.slug}`
    }
  };

  // 2. BreadcrumbList Schema (Matches visible breadcrumbs exactly)
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.category,
        "item": `https://insidiousbulls.com/blog`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title,
        "item": `https://insidiousbulls.com/blog/${post.slug}`
      }
    ]
  };

  // 3. FAQPage Schema ONLY if visible FAQ exists on the page (Rule #1)
  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const schemasToInject = faqSchema
    ? [articleSchema, breadcrumbSchema, faqSchema]
    : [articleSchema, breadcrumbSchema];

  return (
    <article className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-12 text-white max-w-4xl mx-auto">
      {/* Dynamic SEO Head Component */}
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://insidiousbulls.com/blog/${post.slug}`}
        ogTitle={post.metaTitle}
        ogDescription={post.metaDescription}
        ogUrl={`https://insidiousbulls.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.featuredImage}
        schema={schemasToInject}
      />

      {/* Visible Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center text-xs sm:text-sm text-white/50 gap-2">
        <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-emerald-400">{post.category}</span>
        <span>/</span>
        <span className="text-white/80 font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
      </nav>

      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Back to all articles
      </Link>

      {/* Header & Meta Information */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-emerald-500/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs text-white/60 flex items-center gap-1">
            <Clock size={14} className="text-emerald-400" /> {post.readTime}
          </span>
          <span className="text-xs text-white/60 flex items-center gap-1">
            <Calendar size={14} className="text-emerald-400" /> Published: {post.publishedDate}
          </span>
          {post.updatedDate && (
            <span className="text-xs text-emerald-400/80 flex items-center gap-1 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              <RefreshCw size={12} /> Updated: {post.updatedDate}
            </span>
          )}
        </div>

        <GradientText
          colors={["#ffffff", "#69F0AE", "#ffffff"]}
          animationSpeed={8}
          showBorder={false}
          className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-left"
        >
          {post.title}
        </GradientText>

        {/* Author Bio Snippet */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white flex items-center gap-1">
              <User size={14} className="text-emerald-400" /> Authored by {post.author}
            </p>
            <p className="text-xs text-white/50">{post.authorBio}</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* GEO Standalone Quick Answer Callout */}
      {post.quickAnswer && (
        <section className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 mb-10 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">
            <BookOpen size={18} /> Quick Answer / Summary
          </div>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
            {post.quickAnswer}
          </p>
        </section>
      )}

      {/* Key Takeaways Box */}
      {post.keyTakeaways && post.keyTakeaways.length > 0 && (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-12 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 size={20} className="text-emerald-400" /> Key Takeaways
          </h3>
          <ul className="space-y-3">
            {post.keyTakeaways.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-white/80">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Body Content */}
      <div
        className="prose prose-invert max-w-none space-y-6 text-white/80 text-sm sm:text-base leading-relaxed mb-16
                   [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-3
                   [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-emerald-400 [&>h3]:mt-6 [&>h3]:mb-3
                   [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
                   [&>pre]:bg-black/60 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-white/10 [&>pre]:overflow-x-auto [&>pre]:text-emerald-400 [&>pre]:text-xs"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* FAQ Section (AEO - Visible FAQ) */}
      {post.faq && post.faq.length > 0 && (
        <section className="my-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <HelpCircle className="text-emerald-400" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {post.faq.map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sources & References */}
      {post.sources && post.sources.length > 0 && (
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-12">
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3">
            References & External Sources
          </h3>
          <ul className="space-y-2">
            {post.sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  {src.title} <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* E-E-A-T Educational Disclaimer */}
      <div className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-12 text-xs text-white/50 leading-relaxed">
        <p className="font-bold text-white/70 mb-1 uppercase tracking-wider">Educational & Financial Disclaimer</p>
        Educational content published by Insidious Bulls is strictly for informational and educational purposes only. We do not provide personalized financial, investment, or trading advice. Financial trading carries inherent risk of capital loss. Past performance does not guarantee future market results.
      </div>

      {/* Mentorship CTA Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-black to-emerald-950/80 border border-emerald-500/40 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.2)] mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to Trade with Precision & Discipline?
        </h3>
        <p className="text-white/70 text-sm max-w-xl mx-auto">
          Join the Insidious Bulls mentorship program to master price action execution, structured risk management, and market psychology.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-2 bg-emerald-500 text-black font-bold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-all text-sm"
        >
          Enquire About Mentorship <ArrowRight size={18} />
        </button>
      </div>

      {/* Related Articles (Topical Cluster Links) */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-white/10 pt-12">
          <h3 className="text-xl font-bold text-white mb-6">Related Trading Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 rounded-2xl p-5 transition-all group"
              >
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">{rel.category}</span>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mt-2 line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-white/50 mt-2 line-clamp-2">{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
