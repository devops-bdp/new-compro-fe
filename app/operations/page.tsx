import OperationRouteSection from "@/components/operations/OperationRouteSection";
import OperationsPageHeader from "@/components/operations/OperationsPageHeader";
import PartnershipSection from "@/components/operations/PartnershipSection";
import ProductionSection from "@/components/operations/ProductionSection";
import ProjectLocationSection from "@/components/operations/ProjectLocationSection";
import WorkforceSection from "@/components/operations/WorkforceSection";

export const metadata = {
  title: "Operations | PT Batara Dharma Persada",
  description: "Coal hauling operations with Bayan Resource - efficient transportation from mine to port.",
};

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <OperationsPageHeader />
      <PartnershipSection />
      <ProductionSection />
      <WorkforceSection />
      <ProjectLocationSection />
      <OperationRouteSection />
    </div>
  );
}
