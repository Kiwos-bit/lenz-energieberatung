import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = BLOG_POSTS.find(p => p.id === postId);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Lenz Energieberatung Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', post.title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.excerpt);
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', post.image);
      }

      // Article Schema
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": "Energieeffizienz-Experte"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Lenz Energieberatung",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lenzenergieberatung.de/logo.png"
          }
        }
      };

      const existingScript = document.getElementById('article-schema');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'article-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(articleSchema);
      document.head.appendChild(script);

      // Canonical URL setzen
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://lenzenergieberatung.de/blog/${post.id}`;
    }

    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-white hover:text-emerald-300 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zum Blog
            </Link>
            <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mb-8">
            <p className="text-lg text-gray-700 font-medium">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Box */}
          <div className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                ML
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Über den Autor: {post.author}
                </h3>
                <p className="text-gray-700 mb-4">
                  Schornsteinfegermeister und BAFA-zertifizierter Energieeffizienz-Experte aus Düsseldorf. 
                  Mit jahrelanger Praxiserfahrung berate ich Sie kompetent zu allen Fragen rund um Energieeffizienz und Sanierung.
                </p>
                <Link
                  to="/kontakt"
                  className="inline-block text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Jetzt Beratung anfragen →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Weitere interessante Artikel
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {BLOG_POSTS.filter(p => p.id !== postId).slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
