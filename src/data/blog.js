import { BLOG_IMAGES } from "./images";

const blogImg = (id) => BLOG_IMAGES[id];

export const BLOG_CATEGORIES = ["All", "News", "Projects", "Safety", "MEP"];

export const BLOG_POSTS = [
  {
    id: "site-safety-standards",
    title: "Site Safety Standards on Government Construction Projects",
    excerpt: "How Multi Tech Engineers maintains strict HSE protocols across courts, hospitals, and public sector builds in Pakistan.",
    body: "Safety is non-negotiable on every Multi Tech Engineers site. From mandatory PPE and daily toolbox talks to documented hazard assessments, our teams follow government and international best practices.\n\nOn institutional projects — judicial complexes, hospitals, and government offices — we coordinate closely with client safety officers and maintain clear signage, barricades, and emergency procedures throughout the build.\n\nThis disciplined approach has helped us deliver complex projects without compromising worker welfare or public safety.",
    date: "2025-02-18",
    category: "Safety",
    author: "Multi Tech Engineers",
    readTime: "4 min read",
    image: blogImg("site-safety-standards"),
  },
  {
    id: "hospital-construction-update",
    title: "Hospital Construction: Delivering Healthcare Infrastructure",
    excerpt: "An inside look at civil and MEP coordination for hospital projects — from foundation works to final commissioning.",
    body: "Healthcare facilities demand precision across civil, electrical, mechanical, and HVAC disciplines. Multi Tech Engineers has delivered hospital construction and upgrades across Pakistan and Afghanistan.\n\nOur approach integrates structural works with MEP rough-in early in the schedule, avoiding costly rework. Generator backup, medical gas provisions, and HVAC zoning are planned alongside the main building frame.\n\nQuality inspections at each milestone ensure facilities are ready for equipment installation and handover to medical staff.",
    date: "2025-01-22",
    category: "Projects",
    author: "Multi Tech Engineers",
    readTime: "5 min read",
    image: blogImg("hospital-construction"),
  },
  {
    id: "hvac-public-buildings",
    title: "HVAC Systems for Large Public Buildings",
    excerpt: "Design and installation considerations for government complexes, colleges, and institutional facilities.",
    body: "Large public buildings require HVAC systems sized for occupancy, climate, and energy efficiency. Multi Tech Engineers designs and installs split, central, and ducted systems tailored to each facility's use.\n\nFor courts and government offices, we balance comfort with operational cost. For hospitals and labs, air quality and pressure control take priority.\n\nOur teams work with consultants and clients from design review through testing, balancing, and commissioning.",
    date: "2024-12-08",
    category: "MEP",
    author: "Multi Tech Engineers",
    readTime: "4 min read",
    image: blogImg("hvac-public"),
  },
  {
    id: "afghanistan-healthcare",
    title: "Expanding Healthcare Infrastructure in Afghanistan",
    excerpt: "Multi Tech Engineers' contribution to hospital development and community healthcare facilities across Afghanistan.",
    body: "Beyond Pakistan, Multi Tech Engineers has extended services to Afghanistan — supporting hospital construction and healthcare infrastructure for communities in need.\n\nWorking in challenging environments requires robust logistics, local partnerships, and adaptable construction methods. Our teams bring the same quality standards applied on domestic projects.\n\nThese builds improve access to care and demonstrate our commitment to regional development and lasting infrastructure.",
    date: "2024-11-14",
    category: "News",
    author: "Multi Tech Engineers",
    readTime: "5 min read",
    image: blogImg("afghanistan-healthcare"),
  },
  {
    id: "judicial-complex-build",
    title: "Building Judicial Complexes: Structure, MEP & Finishing",
    excerpt: "From steel frame erection to electrical and HVAC fit-out — how we deliver courts and legal infrastructure.",
    body: "Judicial complexes combine heavy civil works with detailed MEP and finishing requirements. Multi Tech Engineers has executed multiple court and legal facility projects.\n\nStructural works include foundations, frame, masonry, and roofing. MEP covers power distribution, lighting, lifts, HVAC, and fire safety systems. Finishing includes flooring, ceilings, and accessibility features.\n\nPhased handover allows partial occupancy while adjacent wings remain under construction — a common requirement on large institutional sites.",
    date: "2024-10-05",
    category: "Projects",
    author: "Multi Tech Engineers",
    readTime: "6 min read",
    image: blogImg("judicial-complex"),
  },
  {
    id: "electrical-institutional",
    title: "Electrical Works for Institutional & Commercial Sites",
    excerpt: "HT/LT lines, substations, solar street lighting, and security systems for public infrastructure projects.",
    body: "Electrical infrastructure powers every facility we build. Multi Tech Engineers provides complete electrification — from HT/LT distribution and substations to internal wiring, lighting, and solar street lighting.\n\nOn government and commercial sites, reliability and compliance with national codes are essential. We document all installations and conduct testing before energization.\n\nSecurity lighting, backup power, and surge protection are integrated into project plans from the earliest design stage.",
    date: "2024-09-12",
    category: "MEP",
    author: "Multi Tech Engineers",
    readTime: "4 min read",
    image: blogImg("electrical-institutional"),
  },
];

export function formatBlogDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
