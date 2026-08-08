import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export default function SEO({
  title,
  description,
  canonical,
  robots = "index, follow",
  ogTitle,
  ogDescription,
  ogUrl,
  ogType = "website",
  ogImage = "https://insidiousbulls.com/og-image.jpg",
  twitterCard = "summary_large_image",
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to manage meta tags
    const setMetaTag = (attrName: "name" | "property", attrValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // 2. Explicitly remove any legacy meta keywords tag
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.remove();
    }

    // 3. Set Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", robots);
    setMetaTag("name", "viewport", "width=device-width, initial-scale=1.0");

    // 4. Set OpenGraph Meta Tags
    const currentUrl = ogUrl || canonical || (typeof window !== "undefined" ? window.location.href.split("?")[0] : "https://insidiousbulls.com/");
    setMetaTag("property", "og:site_name", "Insidious Bulls");
    setMetaTag("property", "og:title", ogTitle || title);
    setMetaTag("property", "og:description", ogDescription || description);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);

    // 5. Set Twitter Card Tags
    setMetaTag("name", "twitter:card", twitterCard);
    setMetaTag("name", "twitter:title", ogTitle || title);
    setMetaTag("name", "twitter:description", ogDescription || description);
    setMetaTag("name", "twitter:image", ogImage);

    // 6. Set Canonical Link
    const targetCanonical = canonical || currentUrl;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", targetCanonical);

    // 7. Dynamic JSON-LD Injection
    const scriptId = "seo-jsonld-schema";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (scriptElement) {
      scriptElement.remove();
    }

    if (schema) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      scriptElement.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptElement);
    }

    return () => {
      // Clean up script on route change
      const scriptToClean = document.getElementById(scriptId);
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [title, description, canonical, robots, ogTitle, ogDescription, ogUrl, ogType, ogImage, twitterCard, schema]);

  return null;
}
