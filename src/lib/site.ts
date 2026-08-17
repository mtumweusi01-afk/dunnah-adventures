export const SITE_URL = "https://dunnahadventures.com";
export const SITE_NAME = "Dunnah Adventures";

// TODO(owner): TikTok URL and office address are still placeholders —
// see MEDIA-TODO.md.
export const CONTACT = {
  phone: "+254 707 099 579",
  phoneHref: "tel:+254707099579",
  whatsappNumber: "254707099579", // digits only, no leading +
  email: "dunnahadventures@gmail.com",
  instagram: "https://www.instagram.com/dunnahadventures?igsh=d3Y0YWxmdWVyZnBi",
  facebook: "https://www.facebook.com/share/14r6Psp6Ews/",
  tiktok: "https://tiktok.com/@dunnahadventures",
  address: "Nairobi, Kenya",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Web3Forms access key — free service, sign up at web3forms.com and drop the
// key in here. Until then the contact form falls back to a mailto: link.
export const WEB3FORMS_ACCESS_KEY = "3de3dcb1-e554-4527-9a26-5a5e4ee44186";
