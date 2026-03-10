import { marked } from 'marked';

export interface ArticleMeta {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  slug: string;
  category: string;
  readTime: number;
}

export interface Article extends ArticleMeta {
  html: string;
  excerpt: string;
}

// Parse YAML-ish frontmatter without external deps
function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, any> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    if (val.startsWith('[')) {
      try {
        data[key] = JSON.parse(val.replace(/\u201c/g, '"').replace(/\u201d/g, '"'));
      } catch {
        data[key] = [];
      }
    } else {
      data[key] = val.replace(/^["']|["']$/g, '');
    }
  }
  return { data, content: match[2] };
}

function slugFromFilename(filename: string): string {
  return filename.replace(/^.*\//, '').replace(/\.md$/, '');
}

function estimateReadTime(content: string): number {
  const wordCount = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function excerpt(content: string, chars = 200): string {
  const text = content.replace(/[#*`\[\]()_>]/g, '').trim();
  return text.length > chars ? text.slice(0, chars).trimEnd() + '…' : text;
}

// Load all markdown files via Vite's import.meta.glob
const rawFiles = import.meta.glob('/content/*.md', { query: '?raw', import: 'default' }) as Record<
  string,
  () => Promise<string>
>;

let _cache: Article[] | null = null;

export async function getAllArticles(): Promise<Article[]> {
  if (_cache) return _cache;

  const articles: Article[] = [];

  for (const [path, loader] of Object.entries(rawFiles)) {
    const raw = await loader();
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || slugFromFilename(path);
    const html = await marked(content);

    articles.push({
      title: data.title || '',
      description: data.description || '',
      keywords: data.keywords || [],
      author: data.author || 'Pamella Zarnoff',
      date: data.date || '',
      slug,
      category: data.category || 'Real Estate Bookkeeping',
      readTime: estimateReadTime(content),
      html,
      excerpt: excerpt(content),
    });
  }

  // Sort newest first
  articles.sort((a, b) => (a.date < b.date ? 1 : -1));
  _cache = articles;
  return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const all = await getAllArticles();
  return all.find((a) => a.slug === slug) ?? null;
}
