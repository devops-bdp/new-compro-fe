import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="min-h-screen bg-white px-6 py-20 sm:px-12 lg:px-20">
        <p className="text-zinc-600">
          Content section placeholder. Add your sections below the hero.
        </p>
      </div>
    </>
  );
}
