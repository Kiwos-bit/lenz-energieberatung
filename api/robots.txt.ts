export const config = {
  runtime: 'edge',
};

export default function handler() {
  const robotsTxt = `# Lenz Energieberatung - Robots.txt
# Aktualisiert: Januar 2026

User-agent: *
Allow: /

# XML Sitemap
Sitemap: https://lenzenergieberatung.de/sitemap.xml

# Optimiert für Google, Bing, und andere Suchmaschinen`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
