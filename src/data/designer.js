/**
 * Designer Information & Configuration
 * 
 * Centralized configuration for Rajabul Saifi.
 * Update phone numbers and contact details here to reflect across the entire site.
 */

export const DESIGNER_INFO = {
  name: "Rajabul Saifi",
  title: "Interior Designer & Execution Specialist",
  tagline: "Quality craftsmanship, transparent execution, and thoughtful interiors tailored to your lifestyle.",
  bio: "Individual interior designer operating with a dedicated, hands-on team of skilled labourers and craftsmen. Delivering custom residential and commercial interior solutions across Delhi NCR with direct personal site supervision.",
  
  // Service Areas
  serviceAreas: [
    "Delhi",
    "Noida",
    "Greater Noida",
    "Delhi NCR"
  ],

  // Contact Information (PLACEHOLDERS: Update with Rajabul Saifi's real details)
  contact: {
    phone: "+91 98765 43210", // [PLACEHOLDER] Replace with actual contact number
    whatsappNumber: "919876543210", // [PLACEHOLDER] Digits with country code, no + or spaces
    email: "enquiry@rajabulinteriors.com", // [PLACEHOLDER] Replace with actual email if available
    location: "Delhi NCR, India"
  },

  // Core Value Propositions based on actual setup (individual designer + dedicated labour team)
  strengths: [
    {
      title: "Direct Site Supervision",
      description: "No middlemen or unaccountable sub-contractors. Rajabul personally oversees daily work on-site."
    },
    {
      title: "In-House Skilled Labour Team",
      description: "Experienced carpenters, painters, false-ceiling technicians, and electricians working cohesively."
    },
    {
      title: "Transparent & Cost-Effective",
      description: "Direct labour management ensures competitive pricing without sacrificing material quality."
    },
    {
      title: "Delhi NCR Coverage",
      description: "Active execution capabilities across Delhi, Noida, and Greater Noida."
    }
  ]
};

/**
 * Helper to generate pre-filled WhatsApp click-to-chat links
 * @param {string} message - Optional pre-filled text message
 * @returns {string} - WhatsApp URL
 */
export function getWhatsAppUrl(message = "Hi Rajabul, I would like to enquire about interior design work for my space.") {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${DESIGNER_INFO.contact.whatsappNumber}?text=${encodedMsg}`;
}
