import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | BlueHQ - Colorectal Cancer Support",
  description: "Connect with the colorectal cancer community",
};

export default function Community() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Community
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Connect with others on similar journeys and share experiences.
        </p>
      </div>
    </div>
  );
}