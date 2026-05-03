export type Template = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  imageUrl: string;
  demoUrl: string;
  themeColor: string;
};

export const templates: Template[] = [
  {
    id: "restaurant",
    title: "Restaurant & Cafe",
    slug: "restaurant",
    description: "A perfect website for restaurants, cafes, and food delivery businesses. Allow your customers to view your menu and place online orders directly via WhatsApp.",
    shortDescription: "Menu showcase + online orders via WhatsApp",
    features: [
      "Digital Menu Integration",
      "Direct WhatsApp Ordering",
      "Business Hours & Location map",
      "Customer Reviews & Testimonials",
      "Mobile-Optimized Design",
      "Social Media Links"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://cuisine-nextjs.vercel.app/",
    themeColor: "amber"
  },
  {
    id: "gym",
    title: "Gym & Personal Trainer",
    slug: "gym",
    description: "Boost your fitness business with a dynamic website. Showcase your services, training packages, and allow clients to easily book sessions online.",
    shortDescription: "Services + packages + online booking",
    features: [
      "Class Schedules & Calendars",
      "Trainer Profiles",
      "Membership Packages Showcase",
      "Lead Capture Forms",
      "High-Energy Image Galleries",
      "WhatsApp Booking Integration"
    ],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/gymlife/",
    themeColor: "red"
  },
  {
    id: "clinic",
    title: "Medical Clinic",
    slug: "clinic",
    description: "A professional and trustworthy online presence for your clinic. Display your services, team, and let patients book appointments seamlessly.",
    shortDescription: "Services showcase + appointment booking",
    features: [
      "Doctor & Staff Profiles",
      "List of Medical Services",
      "Patient Resources & FAQs",
      "Direct WhatsApp Appointments",
      "Trust-Building Design",
      "Insurance Information Section"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/medcare/",
    themeColor: "blue"
  }
];


