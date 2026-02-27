import OrganizationPageHeader from "@/components/organization/OrganizationPageHeader";
import OrganizationSection from "@/components/organization/OrganizationSection";
import StriveSection from "@/components/organization/StriveSection";

export const metadata = {
  title: "Organization | PT Batara Dharma Persada",
  description: "Overall company structure — people, departments, work relationships, systems, and company goals.",
};

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <OrganizationPageHeader />
      <OrganizationSection />
      <StriveSection />
    </div>
  );
}
