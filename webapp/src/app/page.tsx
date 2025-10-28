import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "BlueHQ - Colorectal Cancer Support | Powered by Colorectal Cancer Alliance",
  description: "Take control of your colorectal cancer journey with BlueHQ, a free support service for patients and caregivers powered by the Colorectal Cancer Alliance.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LandingHeader />
      <LandingHero />
      <LandingFooter />
    </div>
  );
}