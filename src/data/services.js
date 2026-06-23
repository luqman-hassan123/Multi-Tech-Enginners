import { SERVICE_FALLBACKS } from "./images";

const serviceImg = (id) => `/images/services/${id}.jpg`;

export const SERVICES = [
  {
    id: "civil-construction",
    icon: "🏗️",
    title: "Civil & Construction",
    desc: "Building construction, roads, judicial complexes, hospitals, colleges, and government facilities — from foundation to finishing across Pakistan and Afghanistan.",
    image: serviceImg("civil-construction"),
    fallback: SERVICE_FALLBACKS["civil-construction"],
  },
  {
    id: "electrical",
    icon: "⚡",
    title: "Electrical Works",
    desc: "Complete electrification — HT/LT lines, substations, solar street lighting, security lighting, and power systems for public and commercial infrastructure.",
    image: serviceImg("electrical"),
    fallback: SERVICE_FALLBACKS.electrical,
  },
  {
    id: "mechanical",
    icon: "⚙️",
    title: "Mechanical Works",
    desc: "Generator sets, pumping systems, lifts, and industrial mechanical installations for hospitals, courts, and large-scale institutional projects.",
    image: serviceImg("mechanical"),
    fallback: SERVICE_FALLBACKS.mechanical,
  },
  {
    id: "hvac",
    icon: "🌡️",
    title: "HVAC Systems",
    desc: "Heating, ventilation, and air-conditioning design and installation for hospitals, government complexes, and commercial buildings.",
    image: serviceImg("hvac"),
    fallback: SERVICE_FALLBACKS.hvac,
  },
  {
    id: "it-infrastructure",
    icon: "💻",
    title: "IT Works & Infrastructure",
    desc: "Structured cabling, networking, CCTV, access control, server rooms, and building IT infrastructure for hospitals, courts, and large institutional facilities.",
    image: serviceImg("it-infrastructure"),
    fallback: SERVICE_FALLBACKS["it-infrastructure"],
  },
];
