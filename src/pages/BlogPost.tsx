import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import BlogSchema from '../components/BlogSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { getArticleBySlug, type Article } from '../lib/blog';
import { BookingSection } from '../components/BookingSection';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null | 'loading'>('loading');

  useEffect(() => {
    if (!slug) return;
    getArticleBySlug(slug).then(setArticle);
  }, [slug]);

  if (article === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="text-warm-400">Loading…</p>
      </div>
    );
  }

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <>
      <SeoHead
        title={`${article.title} | Zen Books`}
        description={article.description}
        path={`/blog/${article.slug}`}
        ogType="article"
      />
      <BlogSchema article={article} />
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }, { name: article.title, path: `/blog/${article.slug}` }]} />

      {/* Header */}
      <section className="bg-cream pt-28 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-warm-400 hover:text-fern text-sm font-medium mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
            <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-warm-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.date)}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} min read
              </span>
              <span>·</span>
              <span className="text-fern">{article.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-warm-600 leading-relaxed border-l-4 border-fern pl-5">
              {article.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fern flex items-center justify-center">
                <span className="text-white font-serif text-sm font-medium">PZ</span>
              </div>
              <div>
                <p className="text-sm font-medium text-warm-900">{article.author}</p>
                <p className="text-xs text-warm-400">Founder, Zen Books · Scranton, PA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-cream pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="prose prose-warm prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-medium prose-headings:text-warm-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-warm-600 prose-p:leading-relaxed
              prose-strong:text-warm-900 prose-strong:font-semibold
              prose-a:text-fern prose-a:no-underline hover:prose-a:underline
              prose-hr:border-cream-200
              prose-ul:text-warm-600 prose-li:my-1
              prose-blockquote:border-fern prose-blockquote:text-warm-600"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>

      {/* Tags */}
      {article.keywords.length > 0 && (
        <section className="bg-cream-100 py-10">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-medium tracking-widest uppercase text-warm-400 mb-4">Topics</p>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-4 py-1.5 rounded-full border border-cream-300 text-warm-600 text-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingSection />
    </>
  );
}
