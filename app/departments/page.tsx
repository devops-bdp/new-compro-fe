import DepartmentsPageHeader from "@/components/departments/DepartmentsPageHeader";
import DepartmentsSection from "@/components/our-team/DepartmentsSection";

export const metadata = {
  title: "Departments | PT Batara Dharma Persada",
  description: "Department structure of PT Batara Dharma Persada - Site and Head Office.",
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <DepartmentsPageHeader />
      <DepartmentsSection />
    </div>
  );
}
