export const config = {
  runtime: 'edge',
};

export default function handler() {
  const robotsTxt = `# Lenz Energieberatung - Robots.txt
# Aktualisiert: Februar 2026

User-agent: *
Allow: /

# Sitemap
Sitemap: https://lenzenergieberatung.de/sitemap.xml

# Crawl-Delay für höfliches Crawling
Crawl-delay: 1

# Blockiere unwichtige Ressourcen
Disallow: /api/
Disallow: /*.json$
Disallow: /node_modules/

# Erlaube wichtige Ressourcen für Rendering
Allow: /manifest.json
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.webp`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
