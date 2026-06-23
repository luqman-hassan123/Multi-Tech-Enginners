/**
 * Sends the contact form via Web3Forms (free, no backend required).
 *
 * Setup:
 * 1. Go to https://web3forms.com and create a free access key
 * 2. Set your recipient email to multitechengineers497@gmail.com
 * 3. Create MTE-APP/.env.local with:
 *    VITE_WEB3FORMS_ACCESS_KEY=your_key_here
 * 4. Restart npm run dev
 */
export async function submitContactForm({ name, email, subject, message }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to .env.local (see .env.example)."
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      subject: subject?.trim() || "Website contact inquiry",
      message,
      from_name: "Multi Tech Engineers Website",
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Could not send your message. Please try again.");
  }

  return data;
}
