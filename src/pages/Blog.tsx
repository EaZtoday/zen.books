import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { getAllArticles, type Article } from '../lib/blog';
import { BookingSection } from '../components/BookingSection';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((a) => {
      setArticles(a);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <SeoHead
        title="Real Estate Bookkeeping Blog | Zen Books — Scranton, PA"
        description="Straight-talk bookkeeping advice for real estate investors. CapEx vs. repairs, per-property P&L, multi-entity LLCs, fix-and-flip tracking — written by Pamella Zarnoff, Zen Books."
        path="/blog"
      />
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }]} />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-cream relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-fern-50/40 via-cream to-cream" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium tracking-widest uppercase text-fern mb-6"
          >
            The Zen Books Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-warm-900 mb-6"
          >
            Books that speak real estate.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-warm-600 leading-relaxed max-w-2xl mx-auto"
          >
            No generic accounting advice. Just the stuff that actually matters to real estate investors — written by someone who does this every day.
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-20 text-warm-400">Loading articles…</div>
          ) : (
            <div className="space-y-12">
              {articles.map((article, i) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group border-b border-cream-200 pb-12 last:border-0"
                >
                  <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-warm-400 mb-4">
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
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-warm-900 mb-3 group-hover:text-fern transition-colors">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-warm-600 leading-relaxed mb-6 max-w-3xl">{article.excerpt}</p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-fern font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <BookingSection />
    </>
  );
}
