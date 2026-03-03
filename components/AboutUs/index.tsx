"use client";

import Image from "next/image";
import AboutUsContent from "./AboutUsContent";
import ImageSlider from "./ImageSlider";
import SiteLocations from "./SiteLocations";
import StatsCounter from "./StatsCounter";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AboutUsContent />
          <ImageSlider />
        </div>
        <StatsCounter />
        <SiteLocations />
      </div>
      <div className="relative mt-16 w-full">
        <Image
          src="/hauling-truck.png"
          alt="PT Batara Dharma Persada hauling fleet"
          width={1920}
          height={1080}
          className="h-auto w-full object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
    </section>
  );
}
