export const SITE_URL = "https://dunnahadventures.com";
export const SITE_NAME = "Dunnah Adventures";

// TODO(owner): replace with real details once supplied — see MEDIA-TODO.md.
export const CONTACT = {
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  whatsappNumber: "254700000000", // digits only, no leading +
  email: "info@dunnahadventures.com",
  instagram: "https://instagram.com/dunnahadventures",
  tiktok: "https://tiktok.com/@dunnahadventures",
  address: "Nairobi, Kenya",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Web3Forms access key — free service, sign up at web3forms.com and drop the
// key in here. Until then the contact form falls back to a mailto: link.
export const WEB3FORMS_ACCESS_KEY = "3de3dcb1-e554-4527-9a26-5a5e4ee44186";
