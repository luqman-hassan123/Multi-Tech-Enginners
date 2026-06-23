import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CONTACT_INFO } from "../../data/site";
import { submitContactForm } from "../../utils/contactForm";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import FormField from "../ui/FormField";
import ContactItem from "../ui/ContactItem";

const SUBJECT_SUGGESTIONS = [
  "Project inquiry",
  "Tender / quotation",
  "Career application",
  "Partnership",
];

export default function ContactSection({ divider = true }) {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: location.state?.subject || "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const applySubject = (subject) => setForm((prev) => ({ ...prev, subject }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setError("");

    try {
      await submitContactForm(form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "sent"
        ? "✓ Message Sent!"
        : "Send Message →";

  return (
    <Section id="contact" theme="light" width="narrow" divider={divider}>
      {({ inView }) => (
        <>
          <SectionHeader
            theme="light"
            tag="Get In Touch"
            title={
              <>
                Start Your Next <span className="text-accent">Project</span>
              </>
            }
            subtitle="Tell us about your construction or MEP requirements — our team will respond promptly."
          />

          <div className={`contact-grid fade-in ${inView ? "is-visible" : ""}`}>
            <aside className="contact-panel contact-panel--info">
              <h3 className="contact-panel__title">Contact Information</h3>
              <p className="contact-panel__lead">
                Reach our office for project inquiries, tenders, and partnerships across Pakistan and
                Afghanistan.
              </p>
              {CONTACT_INFO.map((item, index) => (
                <ContactItem
                  key={item.label}
                  {...item}
                  light
                  isLast={index === CONTACT_INFO.length - 1}
                />
              ))}
            </aside>

            <div className="contact-panel contact-panel--form">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h3 className="contact-panel__title">Send a Message</h3>
                <p className="contact-panel__lead">
                  Fill in the form below. Required fields are marked with{" "}
                  <span className="contact-form__required" aria-hidden>
                    *
                  </span>
                </p>

                <div className="form-row">
                  <FormField label="Full Name *">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                      disabled={status === "sending"}
                      className="input-field"
                    />
                  </FormField>
                  <FormField label="Email Address *">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                      disabled={status === "sending"}
                      className="input-field"
                    />
                  </FormField>
                </div>

                <FormField label="Subject">
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    disabled={status === "sending"}
                    className="input-field"
                  />
                  <div className="contact-form__chips" role="group" aria-label="Subject suggestions">
                    {SUBJECT_SUGGESTIONS.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        className={`contact-form__chip ${form.subject === subject ? "contact-form__chip--active" : ""}`}
                        onClick={() => applySubject(subject)}
                        disabled={status === "sending"}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </FormField>

                <FormField label="Message *">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project scope, location, and timeline..."
                    rows={6}
                    required
                    disabled={status === "sending"}
                    className="input-field input-field--textarea"
                  />
                </FormField>

                {status === "error" && (
                  <p className="form-feedback form-feedback--error" role="alert">
                    {error}
                  </p>
                )}
                {status === "sent" && (
                  <p className="form-feedback form-feedback--success" role="status">
                    Thank you — your message was sent. We will reply soon.
                  </p>
                )}

                <div className="contact-form__actions">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className={`btn-primary--block ${
                      status === "sent" ? "btn-primary--success" : ""
                    } ${status === "error" ? "btn-primary--error" : ""}`}
                  >
                    {buttonLabel}
                  </Button>
                  <p className="contact-form__note">
                    We typically respond within 1–2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </Section>
  );
}
