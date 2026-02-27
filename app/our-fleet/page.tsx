import CoreUnitSection from "@/components/our-fleet/CoreUnitSection";
import FleetPageHeader from "@/components/our-fleet/FleetPageHeader";
import MedicUnitSection from "@/components/our-fleet/MedicUnitSection";
import MobilityUnitSection from "@/components/our-fleet/MobilityUnitSection";
import SupportUnitSection from "@/components/our-fleet/SupportUnitSection";

export const metadata = {
  title: "Our Fleet | PT Batara Dharma Persada",
  description: "Our fleet of Prime Movers and Double Vessels for coal hauling operations.",
};

export default function OurFleetPage() {
  return (
    <div className="min-h-screen bg-white">
      <FleetPageHeader />
      <CoreUnitSection />
      <SupportUnitSection />
      <MobilityUnitSection />
      <MedicUnitSection />
    </div>
  );
}
