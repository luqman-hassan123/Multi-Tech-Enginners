/**
 * Replace these by adding files to public/images/ (same paths).
 * Until then, construction photos from Unsplash are used as fallbacks.
 */
export const SITE_IMAGES = {
  hero: {
    src: "/images/hero/construction-site.jpg",
  },
  banner1: {
    src: "/images/banners/site-work.jpg",
    fallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&q=80",
  },
  banner2: {
    src: "/images/banners/building-frame.jpg",
    fallback: "https://images.unsplash.com/photo-1590496793907-2c73c2b7152a?w=1200&h=800&fit=crop&q=80",
  },
  banner3: {
    src: "/images/banners/team-site.jpg",
    fallback: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&q=80",
  },
};

/** Hero slideshow — files in public/images/hero/ only (used by HeroSection) */
export const HERO_SLIDES = [
  {
    id: "construction-site",
    src: "/images/hero/construction-site.jpg",
    alt: "Construction site",
  },
  {
    id: "building-frame",
    src: "/images/hero/building-frame.jpg",
    alt: "Building structural frame",
  },
  {
    id: "civil-construction",
    src: "/images/hero/civil-construction.jpeg",
    alt: "Civil construction",
  },
];

export const HERO_SLIDE_INTERVAL_MS = 6000;

/** Replace files in public/images/values/ — same filenames as keys below */
export const VALUE_IMAGES = {
  safety: {
    src: "/images/values/integrity-safety.jpg",
    fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=900&h=600&q=85",
  },
  quality: {
    src: "/images/values/quality-craftsmanship.jpg",
    fallback: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&h=600&q=85",
  },
  delivery: {
    src: "/images/values/on-time-delivery.jpg",
    fallback: "https://images.unsplash.com/photo-1590644365607-1c785a097cc1?auto=format&fit=crop&w=900&h=600&q=85",
  },
  durability: {
    src: "/images/values/built-to-last.jpg",
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=600&q=85",
  },
  partnership: {
    src: "/images/values/client-partnership.jpg",
    fallback: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&h=600&q=85",
  },
  reach: {
    src: "/images/values/regional-reach.jpg",
    fallback: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&h=600&q=85",
  },
};

/** Team photos — add files under public/images/team/ when ready */
export const TEAM_IMAGES = {
  asfandyar: {
    src: "/images/team/asfandyar-khan.jpg",
    fallback: "/images/team/asfandyar-khan.jpg",
  },
};

/** Replace files in public/images/blog/ — same keys as post ids in blog.js */
export const BLOG_IMAGES = {
  "site-safety-standards": {
    src: "/images/blog/site-safety-standards.jpg",
    fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=900&h=600&q=85",
  },
  "hospital-construction": {
    src: "/images/blog/hospital-construction.jpg",
    fallback: "https://images.unsplash.com/photo-1586773860418-d47edc1673f9?auto=format&fit=crop&w=900&h=600&q=85",
  },
  "hvac-public": {
    src: "/images/blog/hvac-public.jpg",
    fallback: "https://images.unsplash.com/photo-1632835790198-62b976ddc7a6?auto=format&fit=crop&w=900&h=600&q=85",
  },
  "afghanistan-healthcare": {
    src: "/images/blog/afghanistan-healthcare.jpg",
    fallback: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&h=600&q=85",
  },
  "judicial-complex": {
    src: "/images/blog/judicial-complex.jpg",
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=600&q=85",
  },
  "electrical-institutional": {
    src: "/images/blog/electrical-institutional.jpg",
    fallback: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&h=600&q=85",
  },
};

export const SERVICE_FALLBACKS = {
  electrical: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&h=600&fit=crop&q=80",
  mechanical: "https://images.unsplash.com/photo-1581092915960-3f0a949f1a2c?w=900&h=600&fit=crop&q=80",
  hvac: "https://images.unsplash.com/photo-1632835790198-62b976ddc7a6?w=900&h=600&fit=crop&q=80",
  "it-infrastructure": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop&q=80",
  "civil-construction": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&q=80",
};

export const PROJECT_FALLBACKS = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1590496793907-2c73c2b7152a?w=900&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&q=80",
];

export function getProjectFallback(index = 0) {
  return PROJECT_FALLBACKS[index % PROJECT_FALLBACKS.length];
}
