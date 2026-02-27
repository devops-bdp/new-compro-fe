import CareersPageHeader from "@/components/careers/CareersPageHeader";
import CareersSection from "@/components/careers/CareersSection";

export const metadata = {
  title: "Careers | PT Batara Dharma Persada",
  description: "Join our team. Careers and job opportunities at PT Batara Dharma Persada.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <CareersPageHeader />
      <CareersSection />
    </div>
  );
}
