import type { MetadataRoute } from 'next';
import { SITE_URL, IS_PRODUCTION } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // Preview/staging: bloqueia tudo e não anuncia sitemap (não-produção não indexa).
  if (!IS_PRODUCTION) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  // Produção — README §8.4 + AEO/GEO: deixar bots de IA acessarem (GPTBot,
  // PerplexityBot, ClaudeBot, Google-Extended). É o que permite ser citado
  // por ChatGPT/Perplexity/Gemini quando alguém pergunta sobre direito
  // público/servidor no Rio. NÃO bloquear.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/style-guide', '/area-restrita'],
      },
      // Permissão explícita aos crawlers de IA (defesa em profundidade — alguns
      // CDNs/firewalls bloqueiam por padrão e precisamos garantir leitura).
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
