import usePageTitle from "../hooks/usePageTitle";
import ContactSection from "../components/sections/ContactSection";

export default function ContactPage() {
  usePageTitle("Contact");

  return <ContactSection divider={false} />;
}
