import { CLIENTS } from "./clients";
import { getClientLogo } from "./clientLogos";

export const TESTIMONIALS = [
  {
    id: "judiciary-kpk",
    clientId: "kp-judiciary",
    quote:
      "Multi Tech Engineers delivered our judicial complex with disciplined site management and consistent quality. Their team coordinated civil and MEP works professionally from mobilization through handover.",
    name: "Muhammad Aslam",
    role: "Project Director",
    initials: "MA",
  },
  {
    id: "phc-bannu",
    clientId: "phc",
    quote:
      "The Peshawar High Court Bannu Bench works were executed with reliable workmanship and clear coordination with our technical staff throughout the contract period.",
    name: "Khalid Mehmood",
    role: "Resident Engineer",
    initials: "KM",
  },
  {
    id: "necop-electrical",
    clientId: "necop",
    quote:
      "MTE completed electrical infrastructure installation at NECOP to specification. Their site team maintained safety discipline on a sensitive national facility.",
    name: "Tariq Hussain",
    role: "Chief Engineer",
    initials: "TH",
  },
  {
    id: "healthcare-hospital",
    clientId: "healthcare",
    quote:
      "On our hospital project, MTE maintained strict safety standards while meeting demanding MEP requirements. Communication with our technical staff was clear at every stage of construction.",
    name: "Dr. Farhana Ali",
    role: "Hospital Administration",
    initials: "FA",
  },
  {
    id: "ecp-field",
    clientId: "ecp",
    quote:
      "The Election Commission field office MEP package — HVAC, CCTV, generators, and electrical — was delivered with accountable site supervision and timely progress reporting.",
    name: "Sajid Khan",
    role: "Director Operations",
    initials: "SK",
  },
  {
    id: "education-imcg",
    clientId: "education",
    quote:
      "College construction was completed with attention to structural quality and finishing details. Multi Tech Engineers proved to be a dependable contractor for institutional work.",
    name: "Ayesha Malik",
    role: "Project Manager",
    initials: "AM",
  },
  {
    id: "federal-tribunal",
    clientId: "federal-government",
    quote:
      "We engaged Multi Tech Engineers for building services in a federal courts complex. They executed to specification with reliable workmanship and on-site accountability.",
    name: "Imran Shah",
    role: "Director Administration",
    initials: "IS",
  },
  {
    id: "nab-lahore",
    clientId: "nab",
    quote:
      "HT overhead line and security lighting works at NAB Punjab Complex were completed professionally, with responsive coordination from MTE's electrical team.",
    name: "Rashid Ahmed",
    role: "Electrical Consultant",
    initials: "RA",
  },
];

/** Join testimonial rows with client names and logo paths */
export function getTestimonials() {
  return TESTIMONIALS.map((item) => {
    const client = CLIENTS.find((c) => c.id === item.clientId);
    const logo = getClientLogo(item.clientId);

    return {
      ...item,
      organization: client?.name || item.organization || "Institutional Client",
      sector: client?.sector,
      logoSrc: logo?.src,
    };
  });
}
