import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { company, seo } from '../data/companyData';
import { PAGES } from '../data/pagesData';

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

function setLink(rel, href) {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

/**
 * Keeps the document title, description and Open Graph tags in step with the
 * current route. index.html carries the home-page defaults so crawlers that do
 * not run JavaScript still see valid metadata.
 */
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGES.find((entry) => entry.route === pathname);

    const homeTitle =
      seo.title || [company.name, company.tagline].filter(Boolean).join(' — ');
    const title = page?.metaTitle || homeTitle;
    const description = page?.metaDescription || seo.description;
    const url = seo.siteUrl ? new URL(pathname, seo.siteUrl).toString() : '';

    if (title) document.title = title;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', seo.ogImage?.src ?? seo.ogImage);
    setMeta('meta[property="og:site_name"]', 'content', company.name);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    setLink('canonical', url);
  }, [pathname]);
}
