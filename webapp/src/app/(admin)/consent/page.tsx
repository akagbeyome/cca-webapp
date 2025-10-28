import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consent | BlueHQ - Colorectal Cancer Support",
  description: "Manage your consent preferences and privacy settings",
};

export default function Consent() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Consent
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Manage your consent preferences and privacy settings.
        </p>
      </div>
    </div>
  );
}