/**
 * PROJECT IMAGES — How to add your photos
 * ────────────────────────────────────────
 * 1. Create a folder:  public/images/projects/[project-id]/
 * 2. Add these files (all optional except cover):
 *      cover.jpg       — main thumbnail (recommended 1200×800)
 *      before.jpg      — before construction photo
 *      after.jpg       — after / completed photo
 *      gallery-1.jpg   — additional site photos (add gallery-2, gallery-3, …)
 * 3. Update the paths below to match your filenames.
 *
 * Supported formats: .jpg, .jpeg, .png, .webp
 */

const img = (projectId, file) =>
  `/images/projects/${projectId}/${file.split("/").map(encodeURIComponent).join("/")}`;

export const PROJECT_CATEGORIES = [
  "All",
  "Civil & Construction",
  "Electrical",
  "Mechanical",
  "HVAC",
  "Mixed Works",
];

export const PROJECTS = [
  // ── ONGOING ──────────────────────────────────────────────
  {
    id: "arbab-niaz-stadium",
    title: "Arbab Niaz Cricket Stadium",
    location: "Peshawar",
    tag: "Feasibility & Improvement",
    category: "Civil & Construction",
    status: "ongoing",
    year: "2024",
    description:
      "Large-scale stadium feasibility study and improvement works including structural assessment, seating upgrades, and infrastructure modernization for one of Pakistan's premier cricket venues.",
    cover: img("arbab-niaz-stadium", "cover.jpg"),
    before: img("arbab-niaz-stadium", "before.jpg"),
    after: img("arbab-niaz-stadium", "after.jpg"),
    gallery: [
      img("arbab-niaz-stadium", "gallery-1.jpg"),
      img("arbab-niaz-stadium", "gallery-2.jpg"),
      img("arbab-niaz-stadium", "gallery-3.jpg"),
    ],
  },
  {
    id: "judicial-complex-mansehra",
    title: "06 Court Rooms Judicial Complex",
    location: "Mansehra",
    tag: "Construction",
    category: "Civil & Construction",
    status: "ongoing",
    year: "2024",
    description:
      "Complete construction of a six-court judicial complex including civil works, MEP installations, and finishing for the Khyber Pakhtunkhwa judiciary.",
    cover: img("judicial-complex-mansehra", "cover.jpg"),
    before: img("judicial-complex-mansehra", "before.jpg"),
    after: img("judicial-complex-mansehra", "after.jpg"),
    gallery: [
      img("judicial-complex-mansehra", "gallery-1.jpg"),
      img("judicial-complex-mansehra", "gallery-2.jpg"),
      img("judicial-complex-mansehra", "gallery-3.jpg"),
      img("judicial-complex-mansehra", "gallery-4.jpg"),
    ],
  },
  {
    id: "hajj-complex-admin",
    title: "Hajj Complex Admin Block",
    location: "Pakistan",
    tag: "Construction",
    category: "Civil & Construction",
    status: "ongoing",
    year: "2024",
    description:
      "Administrative block construction for the Hajj Complex including structural works, HVAC, electrical systems, and interior finishing.",
    cover: img("hajj-complex-admin", "cover.jpg"),
    before: img("hajj-complex-admin", "before.jpg"),
    after: img("hajj-complex-admin", "after.jpg"),
    gallery: [
      img("hajj-complex-admin", "gallery-1.jpg"),
      img("hajj-complex-admin", "gallery-2.jpg"),
    ],
  },

  // ── EXECUTED ─────────────────────────────────────────────
  {
    id: "phc-bannu-bench",
    title: "Peshawar High Court Bannu Bench",
    location: "Bannu",
    tag: "Completed",
    category: "Mixed Works",
    status: "executed",
    year: "2022",
    description:
      "Full MEP and civil works for the Peshawar High Court Bannu Bench facility — a landmark judicial infrastructure project.",
    cover: img("phc-bannu-bench", "peshawer high court banu.jpeg"),
    gallery: [img("phc-bannu-bench", "peshawer high court banu.jpeg")],
  },
  {
    id: "necop",
    title: "National Electronic Complex of Pakistan",
    location: "Islamabad",
    tag: "Completed",
    category: "Electrical",
    status: "executed",
    year: "2021",
    description:
      "Electrical infrastructure and systems installation for the National Electronic Complex — a critical national technology facility.",
    cover: img("necop", "cover.jpg"),
    before: img("necop", "before.jpg"),
    after: img("necop", "after.jpg"),
    gallery: [img("necop", "gallery-1.jpg")],
  },
  {
    id: "hospital-latifal-chakwal",
    title: "20-Bedded Hospital",
    location: "Village Latifal, Chakwal",
    tag: "Completed",
    category: "Civil & Construction",
    status: "executed",
    year: "2020",
    description:
      "Construction of a 20-bed healthcare facility including building works, medical gas systems, HVAC, and complete electrification.",
    cover: img("hospital-latifal-chakwal", "cover.jpg"),
    before: img("hospital-latifal-chakwal", "before.jpg"),
    after: img("hospital-latifal-chakwal", "after.jpg"),
    gallery: [
      img("hospital-latifal-chakwal", "gallery-1.jpg"),
      img("hospital-latifal-chakwal", "gallery-2.jpg"),
      img("hospital-latifal-chakwal", "gallery-3.jpg"),
    ],
  },
  {
    id: "federal-tribunal-g11",
    title: "Federal Tribunal/Courts Complex",
    location: "Sector G-11, Islamabad",
    tag: "Completed",
    category: "Civil & Construction",
    status: "executed",
    year: "2019",
    description:
      "Construction and MEP works for the Federal Tribunal and Courts Complex in Islamabad's G-11 sector.",
    cover: img("federal-tribunal-g11", "cover.jpg"),
    before: img("federal-tribunal-g11", "before.jpg"),
    after: img("federal-tribunal-g11", "after.jpg"),
    gallery: [img("federal-tribunal-g11", "gallery-1.jpg"), img("federal-tribunal-g11", "gallery-2.jpg")],
  },
  {
    id: "nclb-pm-health",
    title: "National Control Laboratory for Biological (NCLB)",
    location: "PM Health Complex",
    tag: "Completed",
    category: "Mixed Works",
    status: "executed",
    year: "2018",
    description:
      "Specialized laboratory construction with precision HVAC, electrical, and mechanical systems for biological control research.",
    cover: img("nclb-pm-health", "cover.jpg"),
    before: img("nclb-pm-health", "before.jpg"),
    after: img("nclb-pm-health", "after.jpg"),
    gallery: [img("nclb-pm-health", "gallery-1.jpg")],
  },
  {
    id: "statistics-division-g9",
    title: "Statistics Division Headquarters",
    location: "G-9, Islamabad",
    tag: "Completed",
    category: "Electrical",
    status: "executed",
    year: "2018",
    description:
      "Complete electrical and mechanical works for the Statistics Division headquarters building in Islamabad.",
    cover: img("statistics-division-g9", "cover.jpg"),
    before: img("statistics-division-g9", "before.jpg"),
    after: img("statistics-division-g9", "after.jpg"),
    gallery: [img("statistics-division-g9", "gallery-1.jpg")],
  },
  {
    id: "imcg-g14",
    title: "Islamabad Model College for Girls",
    location: "G-14/4, Islamabad",
    tag: "Completed",
    category: "Civil & Construction",
    status: "executed",
    year: "2017",
    description:
      "Educational facility construction and MEP installation for Islamabad Model College for Girls.",
    cover: img("imcg-g14", "cover.jpg"),
    before: img("imcg-g14", "before.jpg"),
    after: img("imcg-g14", "after.jpg"),
    gallery: [img("imcg-g14", "gallery-1.jpg"), img("imcg-g14", "gallery-2.jpg")],
  },
  {
    id: "king-hamad-university",
    title: "King Hamad University of Nursing & Allied Sciences",
    location: "Park Road, Islamabad",
    tag: "Completed",
    category: "Civil & Construction",
    status: "executed",
    year: "2019",
    description:
      "Major institutional construction project for a university campus including civil, HVAC, and electrical systems.",
    cover: img("king-hamad-university", "cover.jpg"),
    before: img("king-hamad-university", "before.jpg"),
    after: img("king-hamad-university", "after.jpg"),
    gallery: [
      img("king-hamad-university", "gallery-1.jpg"),
      img("king-hamad-university", "gallery-2.jpg"),
      img("king-hamad-university", "gallery-3.jpg"),
    ],
  },
  {
    id: "pm-office-refurbishment",
    title: "Prime Minister's Office Refurbishment",
    location: "Islamabad",
    tag: "Completed",
    category: "Electrical",
    status: "executed",
    year: "2016",
    description:
      "Internal electrification and MEP refurbishment for the Prime Minister's Office — executed to the highest security and quality standards.",
    cover: img("pm-office-refurbishment", "cover.jpg"),
    before: img("pm-office-refurbishment", "before.jpg"),
    after: img("pm-office-refurbishment", "after.jpg"),
    gallery: [img("pm-office-refurbishment", "gallery-1.jpg")],
  },
  {
    id: "nab-punjab-lahore",
    title: "NAB Punjab Complex Lahore",
    location: "Lahore",
    tag: "Completed",
    category: "Electrical",
    status: "executed",
    year: "2017",
    description:
      "HT overhead line installation and security lighting for the NAB Punjab Complex in Lahore.",
    cover: img("nab-punjab-lahore", "cover.jpg"),
    before: img("nab-punjab-lahore", "before.jpg"),
    after: img("nab-punjab-lahore", "after.jpg"),
    gallery: [img("nab-punjab-lahore", "gallery-1.jpg")],
  },
  {
    id: "ecp-field-office",
    title: "ECP Field Office",
    location: "Pakistan",
    tag: "Completed",
    category: "Mixed Works",
    status: "executed",
    year: "2018",
    description:
      "Complete MEP package — gas, HVAC, CCTV, generator, fire fighting, and electrical works for the Election Commission field office.",
    cover: img("ecp-field-office", "cover.jpg"),
    before: img("ecp-field-office", "before.jpg"),
    after: img("ecp-field-office", "after.jpg"),
    gallery: [img("ecp-field-office", "gallery-1.jpg"), img("ecp-field-office", "gallery-2.jpg")],
  },
  {
    id: "transit-satluj-lahore",
    title: "Additional Floors — Transit Satluj Block",
    location: "Allama Iqbal Town, Lahore",
    tag: "Completed",
    category: "Civil & Construction",
    status: "executed",
    year: "2019",
    description:
      "Vertical expansion — additional floor construction and structural works for the Transit Satluj Block in Lahore.",
    cover: img("transit-satluj-lahore", "cover.jpg"),
    before: img("transit-satluj-lahore", "before.jpg"),
    after: img("transit-satluj-lahore", "after.jpg"),
    gallery: [img("transit-satluj-lahore", "gallery-1.jpg"), img("transit-satluj-lahore", "gallery-2.jpg")],
  },
  {
    id: "survey-pakistan",
    title: "Survey of Pakistan Office Complex",
    location: "Islamabad",
    tag: "Completed",
    category: "Mechanical",
    status: "executed",
    year: "2016",
    description:
      "Diesel generator set supply and installation for the Survey of Pakistan Office Complex.",
    cover: img("survey-pakistan", "cover.jpg"),
    before: img("survey-pakistan", "before.jpg"),
    after: img("survey-pakistan", "after.jpg"),
    gallery: [img("survey-pakistan", "gallery-1.jpg")],
  },
];

/** @deprecated use getProjectFallback from ./images.js */
import { getProjectFallback, PROJECT_FALLBACKS } from "./images";

export function getPlaceholder(index = 0) {
  return getProjectFallback(index);
}

export { PROJECT_FALLBACKS as CONSTRUCTION_PLACEHOLDERS };
