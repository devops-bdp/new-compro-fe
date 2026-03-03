import LeadershipSection from "@/components/our-team/LeadershipSection";
import ManagersSection from "@/components/our-team/ManagersSection";
import OurTeamPageHeader from "@/components/our-team/OurTeamPageHeader";
import SiteSenyiurSection from "@/components/our-team/SiteSenyiurSection";

export const metadata = {
  title: "Our Team | PT Batara Dharma Persada",
  description: "Leadership and team structure of PT Batara Dharma Persada.",
};

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <OurTeamPageHeader />
      <LeadershipSection />
      <ManagersSection />
      <SiteSenyiurSection />
    </div>
  );
}
