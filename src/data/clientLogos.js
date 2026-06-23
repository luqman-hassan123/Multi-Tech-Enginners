/** Add logo files to public/images/clients/{client-id}.png (or .jpg) */
const clientLogo = (id, ext = "png") => `/images/clients/${id}.${ext}`;

export const CLIENT_LOGOS = {
  "kp-judiciary": { src: clientLogo("kp-judiciary") },
  phc: { src: clientLogo("phc") },
  "federal-government": { src: clientLogo("federal-government") },
  necop: { src: clientLogo("necop") },
  ecp: { src: clientLogo("ecp") },
  nab: { src: clientLogo("nab") },
  healthcare: { src: clientLogo("healthcare") },
  education: { src: clientLogo("education") },
  sports: { src: clientLogo("sports") },
  "hajj-complex": { src: clientLogo("hajj-complex") },
};

export function getClientLogo(clientId) {
  if (!clientId) return null;
  return CLIENT_LOGOS[clientId] || { src: clientLogo(clientId) };
}
