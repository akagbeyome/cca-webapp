import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | BlueHQ - Colorectal Cancer Support",
  description: "View and manage your notifications",
};

export default function Notifications() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Notifications
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Stay updated with important notifications about your care.
        </p>
      </div>
    </div>
  );
}