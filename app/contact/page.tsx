import ContactCTASection from "@/components/contact/ContactCTASection";
import ContactPageHeader from "@/components/contact/ContactPageHeader";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact | PT Batara Dharma Persada",
  description: "Get in touch with PT Batara Dharma Persada.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactPageHeader />
      <ContactSection />
      <ContactCTASection />
    </div>
  );
}
