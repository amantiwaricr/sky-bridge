import { useEffect } from 'react';
import { company, seo } from '../data/companyData';

function setMeta(selector, attribute, value) {
  if (!value) return;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    const [key, name] = selector.replace(/meta\[|\]|"/g, '').split('=');
    tag.setAttribute(key, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
}

/**
 * Applies title, description and Open Graph tags from companyData.
 * index.html carries sensible defaults so crawlers that do not run JS still
 * see valid metadata; this keeps them in sync once the data file is filled in.
 */
export function useDocumentMeta() {
  useEffect(() => {
    const title = seo.title || [company.name, company.tagline].filter(Boolean).join(' — ');
    if (title) document.title = title;

    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:url"]', 'content', seo.siteUrl);
    setMeta('meta[property="og:image"]', 'content', seo.ogImage?.src ?? seo.ogImage);
    setMeta('meta[property="og:site_name"]', 'content', company.name);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);

    if (seo.siteUrl) {
      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', seo.siteUrl);
    }
  }, []);
}
