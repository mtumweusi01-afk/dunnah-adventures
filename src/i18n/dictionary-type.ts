export type Dictionary = {
  nav: {
    home: string;
    about: string;
    tours: string;
    destinations: string;
    gallery: string;
    blog: string;
    contact: string;
    bookNow: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    inquireNow: string;
    from: string;
    perPerson: string;
    perDay: string;
    perNight: string;
    indicativePricing: string;
    groupSize: string;
    duration: string;
    viewAll: string;
    exploreTours: string;
    exploreDestinations: string;
    days: string;
    allGroupSizes: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    highlightsTitle: string;
    highlightsSubtitle: string;
    highlights: { title: string; desc: string }[];
    tourTypesTitle: string;
    tourTypesSubtitle: string;
    destinationsTitle: string;
    destinationsSubtitle: string;
    testimonialsTitle: string;
    testimonials: { quote: string; author: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string[];
    missionTitle: string;
    missionText: string;
    whyTitle: string;
    whyPoints: { title: string; desc: string }[];
    licensingNote: string;
  };
  tours: {
    eyebrow: string;
    title: string;
    subtitle: string;
    itineraryTitle: string;
    includedTitle: string;
    inquireAboutThis: string;
    typicalCostsTitle: string;
  };
  destinations: {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlightsTitle: string;
    bestTimeTitle: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    videoTitle: string;
    videoText: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formNameLabel: string;
    formEmailLabel: string;
    formPhoneLabel: string;
    formTourLabel: string;
    formMessageLabel: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    directTitle: string;
    whatsappCta: string;
    callCta: string;
    emailCta: string;
    followUs: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    contactTitle: string;
    followTitle: string;
    rightsReserved: string;
  };
};
