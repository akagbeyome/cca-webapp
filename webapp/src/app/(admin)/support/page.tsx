import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | BlueHQ - Colorectal Cancer Support",
  description: "Get help and support for your questions",
};

export default function Support() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Support
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Get help from our support team and access resources.
        </p>
      </div>
    </div>
  );
}