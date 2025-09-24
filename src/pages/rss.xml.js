import rss from '@astrojs/rss';

// Generate RSS from file-based blog posts in src/pages/blog/*.md
export async function GET(context) {
  const site = context.site?.href || 'https://astro-ai.net';

  // Import all markdown posts under /src/pages/blog
  const modules = Object.values(
    import.meta.glob('./blog/*.md', { eager: true })
  );

  // Normalize posts with required fields
  const items = modules
    .map((mod) => {
      const fm = mod.frontmatter || {};
      const link = (mod.url || '').startsWith('http')
        ? mod.url
        : new URL(mod.url || '/', site).toString();
      return {
        title: fm.title || 'Untitled',
        description: fm.description || fm.excerpt || '',
        pubDate: fm.date ? new Date(fm.date) : new Date(),
        link,
      };
    })
    // Sort newest first
    .sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: 'Astro AI Blog',
    description: 'Insights on AI assistants, productivity, and mobile AI from Astro AI X.',
    site,
    items,
  });
}
